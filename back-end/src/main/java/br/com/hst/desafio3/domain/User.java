package br.com.hst.desafio3.domain;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;

@Entity(name="user_table")
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="seq_user_table")
	@SequenceGenerator(name = "seq_user_table", sequenceName = "seq_user_table", allocationSize = 1)
	private Long id;
	
	@Column(nullable = false, length = 60)
	private String name;
	@Column(nullable = false, length = 60)
	private String email;
	@Column(nullable = false, length = 60)
	private String password;
	@OneToOne
	@JoinColumn(name = "company_id", nullable = false)
	private Company company;
	
	public User() {
		
	}

	public User(String name, String email, String password, Company company) {
		this.name = name;
		this.email = email;
		this.password = password;
		this.company = company;
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
}