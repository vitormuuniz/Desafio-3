package br.com.hst.desafio3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class Desafio3ReactSpringBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(Desafio3ReactSpringBootApplication.class, args);
	}

}