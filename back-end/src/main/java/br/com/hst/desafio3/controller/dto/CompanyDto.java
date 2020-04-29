package br.com.hst.desafio3.controller.dto;

import org.springframework.data.domain.Page;

import br.com.hst.desafio3.domain.Company;

public class CompanyDto {
	
	private Long id;
	private String name;
	private int code;
	private String phone;
	private String type;	
	
	public CompanyDto(Company company) {
		this.id = company.getId();
		this.name = company.getName();
		this.code = company.getCode();
		this.phone = company.getPhone();
		this.type = company.getType();
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
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	public static Page<CompanyDto> converter(Page<Company> user) {
		return user.map(CompanyDto::new);
	}
}
