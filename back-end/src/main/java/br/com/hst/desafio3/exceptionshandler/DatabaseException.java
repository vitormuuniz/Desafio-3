package br.com.hst.desafio3.exceptionshandler;

public class DatabaseException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	public DatabaseException(String msn) {
		super(msn);
	}
}
