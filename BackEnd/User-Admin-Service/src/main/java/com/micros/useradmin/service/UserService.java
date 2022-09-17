package com.micros.useradmin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.micros.useradmin.entity.TrainUser;
import com.micros.useradmin.repo.UserRepo;

@Service
public class UserService {

	@Autowired
	private UserRepo urepo;
	
	public TrainUser createUser(TrainUser user)
	{
		return urepo.save(user);
	}
	
	public TrainUser getByEmailId(String email)
	{
		return urepo.getByEmail(email);
	}
	
	public String deleteByEmailId(String email)
	{
		 urepo.deleteByEmail(email);
		 return "deleted Successfully";
		
	}
	
	
	
}
