package br.com.hst.desafio3.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.hst.desafio3.domain.Company;
import br.com.hst.desafio3.domain.User;
import br.com.hst.desafio3.dto.CompanyDto;
import br.com.hst.desafio3.dto.UserDto;
import br.com.hst.desafio3.form.CompanyForm;
import br.com.hst.desafio3.form.CompanyUpdateForm;
import br.com.hst.desafio3.form.UserForm;
import br.com.hst.desafio3.form.UserUpdateForm;
import br.com.hst.desafio3.repository.CompanyRepository;
import br.com.hst.desafio3.repository.UserRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class Controller {

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	CompanyRepository companyRepository;
	
	
	@PostMapping("/users") 
	public ResponseEntity<UserDto> registerCustomer(@RequestBody @Valid UserForm form, UriComponentsBuilder uriBuilder) {
		User user = form.returnCustomer(companyRepository);
		userRepository.save(user);

		URI uri = uriBuilder.path("/customers/{id}").buildAndExpand(user.getId()).toUri();
		return ResponseEntity.created(uri).body(new UserDto(user));
	}

		@GetMapping("/users") // dto = saem da api e é retornado para o cliente
		public ResponseEntity<List<UserDto>> listAllCustomers(@RequestParam(required = false) String name) throws URISyntaxException {

			if (name == null) 
				return ResponseEntity.ok(UserDto.converter(userRepository.findAll()));
			else
				return ResponseEntity.ok(UserDto.converter(userRepository.findByName(name)));
		}

		@GetMapping("/users/{id}")
		public ResponseEntity<UserDto> listOneCustomer(@PathVariable Long id) {
			Optional<User> user = userRepository.findById(id);
			if (user.isPresent())
				return ResponseEntity.ok(new UserDto(user.get()));
			else
				return ResponseEntity.notFound().build();
		}
		
		@PutMapping("/users/{id}")
		@Transactional
		public ResponseEntity<UserDto> updateUser(@PathVariable Long id, @RequestBody @Valid UserUpdateForm form,
				UriComponentsBuilder uriBuilder) {
			Optional<User> userOp = userRepository.findById(id);
			if (userOp.isPresent()) {
				User user = form.updateUserForm(id, userRepository, companyRepository);
				return ResponseEntity.ok(new UserDto(user));
			}
			return ResponseEntity.notFound().build();
		}
		
		@DeleteMapping("/users/{id}")
		@Transactional
		public ResponseEntity<?> deleteCustomer(@PathVariable Long id) {
			Optional<User> customer = userRepository.findById(id);
			if (customer.isPresent()) {
				userRepository.deleteById(id);
				return ResponseEntity.ok().build();
			} else
				return ResponseEntity.notFound().build();
		}
		
		@PostMapping("/companies") 
		public ResponseEntity<CompanyDto> registerCompany(@RequestBody @Valid CompanyForm form, UriComponentsBuilder uriBuilder) {
			Company company = form.returnCompany();
			companyRepository.save(company);
			URI uri = uriBuilder.path("/company/{id}").buildAndExpand(company.getId()).toUri();
			return ResponseEntity.created(uri).body(new CompanyDto(company));
		}
		
		@GetMapping("/companies") 
		public ResponseEntity<List<CompanyDto>> listAllCompanies(@RequestParam(required = false) String name) throws URISyntaxException {
			if (name == null) 
				return ResponseEntity.ok(CompanyDto.converter(companyRepository.findAll()));
			else
				return ResponseEntity.ok(CompanyDto.converter(companyRepository.findByName(name)));
		}
		
		@GetMapping("/companies/{id}")
		public ResponseEntity<CompanyDto> listOneCompany(@PathVariable Long id) {
			Optional<Company> company = companyRepository.findById(id);
			if (company.isPresent())
				return ResponseEntity.ok(new CompanyDto(company.get()));
			else
				return ResponseEntity.notFound().build();
		}
		
		@PutMapping("/companies/{id}")
		@Transactional
		public ResponseEntity<CompanyDto> updateCompany(@PathVariable Long id, @RequestBody @Valid CompanyUpdateForm form,
				UriComponentsBuilder uriBuilder) {
			Optional<Company> companyOp = companyRepository.findById(id);
			if (companyOp.isPresent()) {
				Company company = form.updateCompanyForm(id, companyRepository);
				return ResponseEntity.ok(new CompanyDto(company));
			}
			return ResponseEntity.notFound().build();
		}
		
		@DeleteMapping("/companies/{id}")
		@Transactional
		public ResponseEntity<?> deleteCompany(@PathVariable Long id) {
			Optional<Company> company = companyRepository.findById(id);
			if (company.isPresent()) {
				companyRepository.deleteById(id);
				return ResponseEntity.ok().build();
			} else
				return ResponseEntity.notFound().build();
		}
}
