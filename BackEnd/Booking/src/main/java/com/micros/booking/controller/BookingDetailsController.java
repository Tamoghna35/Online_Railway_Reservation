package com.micros.booking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.micros.booking.entity.BookingDetails;
import com.micros.booking.repository.BookingDetailsRepository;



@CrossOrigin(origins = "*", maxAge = 3600)
@RestController

@RequestMapping("Booking-details")
public class BookingDetailsController {
	@Autowired
	private BookingDetailsRepository repository;
	
	@PostMapping("/addBooking-details/")
	public String saveBooking(@RequestBody BookingDetails book) {
	   
		repository.save(book);
		return "Added booking details";
	}
	
	
	
	
	
}
