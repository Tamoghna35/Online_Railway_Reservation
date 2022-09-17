package com.micros.useradmin.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.micros.useradmin.entity.Passenger;
import com.micros.useradmin.service.PassengerService;

@RestController
@RequestMapping("passenger")

public class PassengerController {
	
	Logger logger = LoggerFactory.getLogger(PassengerController.class);

	@Autowired
	private PassengerService pservice;
	
	@PostMapping("createPassenger")
	public Passenger savePassenger(@RequestBody Passenger passn){
		logger.warn("Correctly fill all the fields");
		return pservice.create(passn);
	}
	

	
	@PutMapping("updatePassenger/{mobile}")
	public Passenger updatePass(@PathVariable("mobile") long mobile, @RequestBody Passenger pass1)
	{
		Passenger pass0 = pservice.getByMobile(mobile);
		pass0.setPass_name(pass1.getPass_name());
		pass0.setPass_train_class(pass1.getPass_train_class());
		pass0.setPass_mobile(pass1.getPass_mobile());
		pass0.setPass_gender(pass1.getPass_gender());
		pass0.setPass_credit_no(pass0.getPass_credit_no());
		pass0.setPass_bank_name(pass1.getPass_bank_name());
		pass0.setPass_address(pass1.getPass_address());
		pass0.setPass_age(pass1.getPass_age());
		
		return pservice.create(pass0);
	}
	
	@GetMapping("getPassengerByMobile/{mobile}")
	public Passenger getPass(@PathVariable("mobile") long mobile)
	{
		return pservice.getByMobile(mobile);
	}
	
	@DeleteMapping("deletePassenger/{mobile}")
	public ResponseEntity<String> deletePass(@PathVariable("mobile") long mobile)
	{
	     String str = pservice.deletePass(mobile);
	     return new ResponseEntity<String>(str, HttpStatus.OK);
	}
}
