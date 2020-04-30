package br.com.hst.commons.controller;

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
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.hst.commons.controller.dto.CompanyDto;
import br.com.hst.commons.controller.dto.UserDto;
import br.com.hst.commons.controller.form.CompanyForm;
import br.com.hst.commons.controller.form.UserForm;
import br.com.hst.commons.domain.Company;
import br.com.hst.commons.domain.User;
import br.com.hst.commons.repository.CompanyRepository;
import br.com.hst.commons.repository.UserRepository;

@RestController
public class Controller {

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	CompanyRepository companyRepository;
	
	@PostMapping("/users") // chegam do cliente para a api
	public ResponseEntity<UserDto> registerCustomer(@RequestBody @Valid UserForm form, UriComponentsBuilder uriBuilder) {
		User user = form.returnCustomer(companyRepository);
		userRepository.save(user);

		// path indica o caminho do recurso sendo chamado (pra nao passar o caminho
		// completo)
		// buildAndExpend serve para pegar e substituir o id em {id} dinamicamente
		// toUri para transformar na uri completa
		URI uri = uriBuilder.path("/customers/{id}").buildAndExpand(user.getId()).toUri();
		return ResponseEntity.created(uri).body(new UserDto(user));
	}
	
	// @RequestParam indica que os parametros irão vir pela url e que são
		// obrigatórios
		// @PageableDefault serve para dizer qual ordenação deverá ser feita caso não
		// sejam passados parametros

		@GetMapping("/users") // dto = saem da api e é retornado para o cliente
		public Page<UserDto> listAllCustomers(@RequestParam(required = false) String name,
				@PageableDefault(sort = "id", direction = Direction.DESC, page = 0, size = 10) Pageable pagination) throws URISyntaxException {

			if (name == null) 
				return UserDto.converter(userRepository.findAll(pagination));
			else
				return UserDto.converter(userRepository.findByName(name, pagination));
		}

		// @PathVariable indica que esse 'id' virá através da url com /topicos/id
		// inves de ser passado com '?id='
		@GetMapping("/users/{id}")
		public ResponseEntity<UserDto> listOneCustomer(@PathVariable Long id) {
			Optional<User> user = userRepository.findById(id);
			if (user.isPresent())
				return ResponseEntity.ok(new UserDto(user.get()));
			else
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
		public Page<CompanyDto> listAllCompanies(@RequestParam(required = false) String name,
				@PageableDefault(sort = "id", direction = Direction.DESC, page = 0, size = 10) Pageable pagination) throws URISyntaxException {

			if (name == null) 
				return CompanyDto.converter(companyRepository.findAll(pagination));
			else
				return CompanyDto.converter(companyRepository.findByName(name, pagination));
		}
		
		@GetMapping("/companies/{id}")
		public ResponseEntity<CompanyDto> listOneCompany(@PathVariable Long id) {
			Optional<Company> company = companyRepository.findById(id);
			if (company.isPresent())
				return ResponseEntity.ok(new CompanyDto(company.get()));
			else
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
		
		@PutMapping("/companies/{id}")
		@Transactional
		public ResponseEntity<CompanyDto> updateCompany(@PathVariable Long id, @RequestBody @Valid CompanyForm form,
				UriComponentsBuilder uriBuilder) {
			Optional<Company> companyOptional = companyRepository.findById(id);
			if (companyOptional.isPresent()) {
				Company company = form.updateCompanyForm(id, companyRepository);
				return ResponseEntity.ok(new CompanyDto(company));
			}
			return ResponseEntity.notFound().build();
		}
}
