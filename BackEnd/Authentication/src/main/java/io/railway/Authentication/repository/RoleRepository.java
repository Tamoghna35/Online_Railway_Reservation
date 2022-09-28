package io.railway.Authentication.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import io.railway.Authentication.models.ERole;
import io.railway.Authentication.models.Role;

public interface RoleRepository extends MongoRepository<Role, String> {
	Optional<Role> findByName(ERole name);
}