package br.com.hst.desafio3.dto;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Page;

import br.com.hst.desafio3.domain.Company;
import br.com.hst.desafio3.domain.User;

public class UserDto {

	private Long id;
	private String name;
	private String email;
	private String password;
	private Company company;

	public UserDto(User user) {
		this.id = user.getId();
		this.name = user.getName();
		this.email = user.getEmail();
		this.password = user.getPassword();
		this.company = user.getCompany();
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

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}

	public Company getCompany() {
		return company;
	}

	public static List<UserDto> converter(List<User> userList) {
		List<UserDto> userDtoList = new ArrayList<>();
		userList.forEach(user -> userDtoList.add(new UserDto(user)));
		return userDtoList;
	}
}
