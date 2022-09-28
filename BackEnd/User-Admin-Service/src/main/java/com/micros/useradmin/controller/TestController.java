package com.micros.useradmin.controller;



import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.micros.useradmin.entity.TrainUser;
import com.micros.useradmin.repo.UserRepo;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {
	
	@Autowired
	private UserRepo repository;
	
	@GetMapping("/all")
	public String allAccess() {
		return "Public Content.";
	}
	
	@GetMapping("/user")
	public String userAccess() {
		return "User Content.";
	}
	@GetMapping("/mod")
	public String moderatorAccess() {
		return "Moderator Board.";
	}
	@GetMapping("/admin")
	public String adminAccess() {
		return "Admin Board.";
	}
	
	@GetMapping("/list/{id}")
	public Optional<TrainUser> registerUser(@Valid @PathVariable String id) {
		
		return repository.findById(id);


	}
	
	@GetMapping("/")
	public String check() {
		return "hii";
	}
	
}