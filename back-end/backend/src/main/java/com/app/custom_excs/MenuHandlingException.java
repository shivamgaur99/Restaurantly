package com.app.custom_excs;

public class MenuHandlingException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	public MenuHandlingException(String errMesg) {
		super(errMesg);
	}
}
