package com.app.exc_handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.app.custom_excs.AdminHandlingException;
import com.app.custom_excs.CustomerHandlingException;
import com.app.custom_excs.MenuHandlingException;
import com.app.dto.ErrorResponse;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
	@ExceptionHandler(CustomerHandlingException.class)
	public ResponseEntity<ErrorResponse> handleCustomerHandlingException(CustomerHandlingException e){
		System.out.println("in handle customer exc");
		return new ResponseEntity<>(new ErrorResponse("Something Went Wrong", e.getMessage()),
				 HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(AdminHandlingException.class)
	public ResponseEntity<ErrorResponse> handleAdminHandlingException(AdminHandlingException e){
		System.out.println("in handle Admin exc");
		return new ResponseEntity<>(new ErrorResponse("Something Went Wrong", e.getMessage()),
				 HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(MenuHandlingException.class)
	public ResponseEntity<ErrorResponse> handleMenuHandlingException(MenuHandlingException e){
		System.out.println("in handle Menu exc");
		return new ResponseEntity<>(new ErrorResponse("Something Went Wrong", e.getMessage()),
				 HttpStatus.BAD_REQUEST);
	}
}
