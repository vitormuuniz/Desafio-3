package br.com.hst.desafio3.controller.form;

import br.com.hst.desafio3.domain.Company;

public class CompanyForm {
	
	private String name;
	private int code;
	private String phone;
	private String type;
	
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
	
	public Company returnCompany() {
		return new Company(name, code, phone, type);
	}
}
