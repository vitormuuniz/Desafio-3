package br.com.hst.commons.exceptions;

public class ResourceNotFountException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	
	public ResourceNotFountException(Object id) {
		super("Resource not found. Id " + id);
	}

}