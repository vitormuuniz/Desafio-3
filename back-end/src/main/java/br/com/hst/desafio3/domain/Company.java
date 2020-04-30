package br.com.hst.desafio3.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="company_table")
public class Company implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY, generator="seq_company")
	private Long id;
	
	@Column(nullable = false, length = 60)
	private String name;
	@Column(nullable = false)
	private int code;
	@Column(nullable = false, length = 15)
	private String phone;
	@Column(nullable = false, length = 60)
	private String type;

	public Company () {
		
	}
	public Company(String name, int code, String phone, String type) {
		this.name = name;
		this.code = code;
		this.phone = phone;
		this.type = type;
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

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
}
