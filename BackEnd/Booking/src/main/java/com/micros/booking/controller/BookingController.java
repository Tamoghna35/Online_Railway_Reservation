package com.micros.booking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import com.micros.booking.entity.Booking;
import com.micros.booking.entity.BookingDetails;
import com.micros.booking.entity.Train;
import com.micros.booking.repository.BookingDetailsRepository;
import com.micros.booking.repository.BookingInfoRepository;
import com.micros.booking.repository.BookingRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("Booking")
public class BookingController {
	@Autowired
	private BookingRepository repository;

	@Autowired
	private BookingDetailsRepository repository1;

	@Autowired
	private BookingInfoRepository repository2;

	@PostMapping("/addBooking/")
	public String saveBooking(@RequestBody Booking book) {

		String order_id = book.getBookingId();

		repository2.save(book.getBookingDetails());

		for (BookingDetails i : book.getPassengerList()) {
			repository1.save(i);
		}
		repository.save(book);
		return "Added booking details";
	}

	@PostMapping("/home")
	public String Test(@RequestBody String book) {
		return book;
	}

	@GetMapping("/allBookingsWithOfUsers/{id}")
	public List<Booking> getByUserId(@PathVariable("id") String id) {

		List<Booking> book = repository.findByBooking(id);
		return book;
	}

	@GetMapping("/showTicket/{pnr}")
	public Booking getBookedTicket(@PathVariable("pnr") String pnr) {
		Booking book = repository.findPnr(pnr);
		return book;
	}

}