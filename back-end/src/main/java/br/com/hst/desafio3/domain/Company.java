package br.com.hst.desafio3.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity(name="company_table")
public class Company {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="seq_company_table")
	@SequenceGenerator(name = "seq_company_table", sequenceName = "seq_company_table", allocationSize = 1)
	private Long id;
	
	@Column(nullable = false, length = 60)
	private String name;
	@Column(nullable = false, length = 15)
	private String phone;
	@Column(nullable = false, length = 60)
	private String type_company;

	public Company () {
		
	}
	public Company(String name, String phone, String type) {
		this.name = name;
		this.phone = phone;
		this.type_company = type;
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
}
