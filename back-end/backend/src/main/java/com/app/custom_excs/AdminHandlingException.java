package com.app.custom_excs;

public class AdminHandlingException extends RuntimeException{
	private static final long serialVersionUID = 1L;
	public AdminHandlingException(String messg) {
		super(messg);
	}
}
