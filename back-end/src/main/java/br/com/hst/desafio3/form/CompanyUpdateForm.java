package br.com.hst.desafio3.form;

import br.com.hst.desafio3.domain.Company;
import br.com.hst.desafio3.repository.CompanyRepository;

public class CompanyUpdateForm {
	
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
	
	public Company updateCompanyForm(Long id, CompanyRepository companyRepository) {
		Company company = companyRepository.getOne(id);
		verifyIfParamIsNotNull(company);
		return company;
	}
	
	private void verifyIfParamIsNotNull(Company company) {
		
		if (name != null)
			company.setName(name);

		if (phone != null)
			company.setPhone(phone);

		if (type_company != null)
			company.setType_company(type_company);
	}
}
