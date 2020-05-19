package br.com.hst.desafio3.form;

import br.com.hst.desafio3.domain.Company;

public class CompanyForm {
	
	private String name;
	private String phone;
	private String type_company;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
		return new Company(name, phone, type_company);
	}
}
