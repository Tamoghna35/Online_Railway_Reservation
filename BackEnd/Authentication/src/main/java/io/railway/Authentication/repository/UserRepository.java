package io.railway.Authentication.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import io.railway.Authentication.models.User;

public interface UserRepository extends MongoRepository<User, String> {
	Optional<User> findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);
}
