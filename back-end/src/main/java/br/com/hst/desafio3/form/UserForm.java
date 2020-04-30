package br.com.hst.desafio3.form;

import com.sun.istack.NotNull;

import br.com.hst.desafio3.domain.Company;
import br.com.hst.desafio3.domain.User;
import br.com.hst.desafio3.repository.CompanyRepository;
import br.com.hst.desafio3.repository.UserRepository;

public class UserForm {
	
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
	
	public User updateCompanyForm(Long id, UserRepository userRepository, CompanyRepository companyRepository) {
		companyRepository.save(company);
		User user = userRepository.getOne(id);
		user.setName(name);
		user.setEmail(email);
		user.setPassword(password);
		user.setCompany(company);
		return user;
	}
}
