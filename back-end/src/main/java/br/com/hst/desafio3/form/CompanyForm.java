package br.com.hst.desafio3.form;

import br.com.hst.desafio3.domain.Company;

public class CompanyForm {
	
	private String name;
	private int code;
	private String phone;
	private String type_company;
	
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
	
	public Company returnCompany() {
		return new Company(name, code, phone, type_company);
	}
}
