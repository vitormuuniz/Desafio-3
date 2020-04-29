package br.com.hst.desafio3.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.hst.desafio3.domain.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}

