package br.com.hst.desafio3.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.hst.desafio3.controller.dto.UserDto;
import br.com.hst.desafio3.controller.form.UserForm;
import br.com.hst.desafio3.domain.User;
import br.com.hst.desafio3.repository.CompanyRepository;
import br.com.hst.desafio3.repository.UserRepository;

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
		public ResponseEntity<List<UserDto>> listAllCustomers(@RequestParam(required = false) String name,
				@PageableDefault(sort = "id", direction = Direction.DESC, page = 0, size = 10) Pageable pagination) throws URISyntaxException {

			if (name == null) 
				return ResponseEntity.ok(UserDto.converter(userRepository.findAll()));
			else
				return ResponseEntity.ok(UserDto.converter(userRepository.findByName(name, pagination)));
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
}
