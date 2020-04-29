package br.com.hst.desafio3.controller.dto;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Page;

import br.com.hst.desafio3.domain.Company;
import br.com.hst.desafio3.domain.User;

public class UserDto {
	
	private String name;
	private String email;
	private String password;
	private Company company;
	
	public UserDto(User user) {
		this.name = user.getName();
		this.email = user.getEmail();
		this.password = user.getPassword();
		this.company = user.getCompany();
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
	
	public static Page<UserDto> converter(Page<User> user) {
		//fazendo um map de topico para topicoDto
		//TopicoDto::new -> recebe o proprio construtor que recebe um topico como parametro
		//collect() -> transforma essa saida em uma lista
//		return topicos.stream().map(TopicoDto::new).collect(Collectors.toList());
		return user.map(UserDto::new);
	}
}
