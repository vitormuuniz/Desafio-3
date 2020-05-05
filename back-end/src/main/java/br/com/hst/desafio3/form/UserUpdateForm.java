package br.com.hst.desafio3.form;

import com.sun.istack.NotNull;

import br.com.hst.desafio3.domain.Company;
import br.com.hst.desafio3.domain.User;
import br.com.hst.desafio3.repository.CompanyRepository;
import br.com.hst.desafio3.repository.UserRepository;

public class UserUpdateForm {
	
	@NotNull 
	private String name;
	@NotNull 
	private String email;
	@NotNull 
	private String password;
	@NotNull 
	private Company company;
	
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
	
	public Company getCompany() {
		return company;
	}
	
	public void setCompany(Company company) {
		this.company = company;
	}
	
	public User returnCustomer(CompanyRepository companyRepository) {
		companyRepository.save(company);
		return new User(name, email, password, company);
	}
	
	public User updateUserForm(Long id, UserRepository userRepository, CompanyRepository companyRepository) {		
		User user = userRepository.getOne(id);
		verifyNull(name, email, password, company, user);
		user.setName(name);
		user.setEmail(email);
		user.setPassword(password);
		user.setCompany(company);
		companyRepository.save(company);
		return user;
	}
	
	private void verifyNull(String name, String email, String password, Company company, User user) {
		if(name == null || name.isEmpty()) {
			this.setName(user.getName());
		}		
		if(email == null || email.isEmpty()) {
			this.setEmail(user.getEmail());
		}		
		if(password == null || password.isEmpty()) {
			this.setPassword(user.getPassword());
		}
		if(company == null) {
			this.setCompany(user.getCompany());
		}
	}
}
