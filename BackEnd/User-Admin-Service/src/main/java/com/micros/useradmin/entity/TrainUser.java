package com.micros.useradmin.entity;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "User")
public class TrainUser {

	@Id
	private String user_id;
	@NotBlank
	@Size(max = 20)
	private String username;
	@Indexed(unique = true)
	@NotBlank
	@Size(max=30)
	private String email;
	@NotBlank
	@Size(max=30)
	private String password;

	
	public TrainUser()
	{}


	
	
	public String getUsername() {
		return username;
	}




	public void setUsername(String username) {
		this.username = username;
	}




	public TrainUser(@NotBlank @Size(max = 20) String username, @NotBlank @Size(max = 30) String email,
			@NotBlank @Size(max = 30) String password) {
		
		this.username = username;
		this.email = email;
		this.password = password;

	}
	
	

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
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