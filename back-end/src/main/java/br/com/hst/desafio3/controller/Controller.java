package br.com.hst.desafio3.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import br.com.hst.desafio3.repository.CompanyRepository;
import br.com.hst.desafio3.repository.UserRepository;

@RestController
public class Controller {

	@Autowired
	UserRepository employeeRepository;
	
	@Autowired
	CompanyRepository companyRepository;
}
