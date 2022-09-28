package com.micros.useradmin.payload.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class SignupRequest {
	
	@NotBlank
	@Size(min = 10, max = 20)
	private String username;
	
	@NotBlank
	@Size(max=30)
	private String email;
	
	@NotBlank
	@Size(min=10, max=20)
	private String password;
	
	@NotBlank
	private String name;
	
	
	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	
	

}
