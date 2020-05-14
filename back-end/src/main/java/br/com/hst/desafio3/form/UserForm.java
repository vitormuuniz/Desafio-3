package br.com.hst.desafio3.form;

import com.sun.istack.NotNull;

import br.com.hst.desafio3.domain.Company;
import br.com.hst.desafio3.domain.User;
import br.com.hst.desafio3.repository.CompanyRepository;

public class UserForm {
	
	@NotNull 
	private String name;
	@NotNull 
	private String email;
	@NotNull 
	private String password;
	@NotNull 
	private Long company_id;
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public Long getCompany_id() {
		return company_id;
	}

	public void setCompany_id(Long company_id) {
		this.company_id = company_id;
	}
	
	public User returnCustomer(CompanyRepository companyRepository) {
		Company company = companyRepository.getOne(company_id);
		System.out.println(company.getName());
		return new User(name, email, password, company);
	}
}
