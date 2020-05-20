package br.com.hst.desafio3.dto;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Page;

import br.com.hst.desafio3.domain.Company;
import br.com.hst.desafio3.domain.User;

public class CompanyDto {
	
	private Long id;
	private String name;
	private String phone;
	private String type_company;	
	
	public CompanyDto(Company company) {
		this.id = company.getId();
		this.name = company.getName();
		this.phone = company.getPhone();
		this.type_company = company.getType_company();
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
	
	public static List<CompanyDto> converter(List<Company> companyList) {
		List<CompanyDto> companyDtoList = new ArrayList<>();
		for (Company company : companyList) {
			companyDtoList.add(new CompanyDto(company));
		}
		return companyDtoList;
	}
}
