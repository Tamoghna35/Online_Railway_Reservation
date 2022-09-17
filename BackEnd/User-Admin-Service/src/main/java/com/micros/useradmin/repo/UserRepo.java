package com.micros.useradmin.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.google.common.base.Optional;
import com.micros.useradmin.entity.TrainUser;

@Repository
public interface UserRepo extends MongoRepository<TrainUser, String>{

	@Query("{email: ?0}")
	TrainUser getByEmail(String email);
	
	
	@Query(value="{'email' : ?0}", delete = true)
	public void deleteByEmail(String email);
	
	
	TrainUser findByUsername(String username);
	  Boolean existsByUsername(String username);
	  Boolean existsByEmail(String email);
}
