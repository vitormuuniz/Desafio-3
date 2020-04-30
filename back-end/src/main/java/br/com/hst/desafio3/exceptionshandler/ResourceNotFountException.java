package br.com.hst.desafio3.exceptionshandler;

public class ResourceNotFountException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	
	public ResourceNotFountException(Object id) {
		super("Resource not found. Id " + id);
	}

}