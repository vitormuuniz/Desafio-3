package br.com.hst.commons.exceptions;

public class DatabaseException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	public DatabaseException(String msn) {
		super(msn);
	}
}
