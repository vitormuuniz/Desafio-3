package br.com.hst.desafio3.dto;

import org.springframework.data.domain.Page;

import br.com.hst.desafio3.domain.Company;

public class CompanyDto {
	
	private Long id;
	private String name;
	private int code;
	private String phone;
	private String type_company;	
	
	public CompanyDto(Company company) {
		this.id = company.getId();
		this.name = company.getName();
		this.code = company.getCode();
		this.phone = company.getPhone();
<<<<<<< HEAD
		this.type_company = company.getType_company();
=======
		this.type = company.getType_company();
>>>>>>> 00b2a4606cd53298b590f676aeb6fd1c72952b51
	}
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getType_company() {
		return type_company;
	}
	
	public void setType_company(String type_company) {
		this.type_company = type_company;
	}
	
	public static Page<CompanyDto> converter(Page<Company> user) {
		return user.map(CompanyDto::new);
	}
}
