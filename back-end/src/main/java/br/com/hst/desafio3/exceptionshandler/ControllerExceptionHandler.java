package br.com.hst.desafio3.exceptionshandler;

import java.time.Instant;

import javax.servlet.http.HttpServletRequest;

import org.postgresql.util.PSQLException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.fasterxml.jackson.databind.JsonMappingException;

@ControllerAdvice
public class ControllerExceptionHandler {
	
	/** Class for error handling. It have the attributes of a response when happened some error. */
	
	@ExceptionHandler(ResourceNotFountException.class)
	public ResponseEntity<StandardError> resourceNotFound (ResourceNotFountException e, HttpServletRequest request){
		String msn = "Resource not found";
		HttpStatus status = HttpStatus.NOT_FOUND;
		StandardError error = new StandardError(Instant.now(), status.value() , msn, e.getMessage(), request.getRequestURI());
		return ResponseEntity.status(status).body(error);		
	}
	
	@ExceptionHandler(DatabaseException.class)
	public ResponseEntity<StandardError> database (DatabaseException e, HttpServletRequest request){
		String msn = "Database error";
		HttpStatus status = HttpStatus.NOT_FOUND;
		StandardError error = new StandardError(Instant.now(), status.value() , msn, e.getMessage(), request.getRequestURI());
		return ResponseEntity.status(status).body(error);		
	}
	
	@ExceptionHandler(DataIntegrityViolationException.class)
	public ResponseEntity<StandardError> invalidValue (DataIntegrityViolationException e, HttpServletRequest request){
		String msn = "Invalid Value. Verify your size.";
		HttpStatus status = HttpStatus.NOT_FOUND;
		StandardError error = new StandardError(Instant.now(), status.value() , msn, e.getMessage(), request.getRequestURI());
		return ResponseEntity.status(status).body(error);		
	}
	
	@ExceptionHandler(JsonMappingException.class)
	public ResponseEntity<StandardError> invalidValue (JsonMappingException e, HttpServletRequest request){
		String msn = "Invalid Value. Verify your type.";
		HttpStatus status = HttpStatus.NOT_FOUND;
		StandardError error = new StandardError(Instant.now(), status.value() , msn, e.getMessage(), request.getRequestURI());
		return ResponseEntity.status(status).body(error);		
	}
}
