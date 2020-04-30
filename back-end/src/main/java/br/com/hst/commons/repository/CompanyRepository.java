package br.com.hst.commons.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.com.hst.commons.domain.Company;

public interface CompanyRepository extends JpaRepository<Company, Long>{

	Page<Company> findByName(String name, Pageable pagination);

}
