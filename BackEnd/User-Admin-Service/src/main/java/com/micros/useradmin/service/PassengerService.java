package com.micros.useradmin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.micros.useradmin.entity.Passenger;
import com.micros.useradmin.repo.PassengerRepo;

@Service
public class PassengerService {
	
	@Autowired
	private PassengerRepo prepo;
	

	public Passenger create(Passenger passenger)
	{
		return prepo.save(passenger);
	}
	
	public Passenger getByMobile(long mobile)
	{
		return prepo.getbyMobile(mobile);
	}
	
	
	public String deletePass(long mobile)
	{
		prepo.deleteByMobile(mobile);
		return "Deleted Successfully";
	}

}
