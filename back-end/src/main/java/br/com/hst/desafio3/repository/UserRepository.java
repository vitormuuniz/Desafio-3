package br.com.hst.desafio3.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.com.hst.desafio3.domain.User;

public interface UserRepository extends JpaRepository<User, Long>{

	List<User> findByName(String name);

}

