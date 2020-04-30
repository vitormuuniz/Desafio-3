package br.com.hst.commons.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.com.hst.commons.domain.User;

public interface UserRepository extends JpaRepository<User, Long>{

	Page<User> findByName(String name, Pageable pagination);

}

