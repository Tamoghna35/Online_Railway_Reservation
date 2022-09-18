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
	
//	@Autowired
//	private Train t;
	
//	RestTemplate restTemplate = new RestTemplate();
	
	@PostMapping("/addBooking/")
	public String saveBooking(@RequestBody Booking book) {
		
		String order_id=book.getBookingId();
		
		
//		RestTemplate restTemplate = new RestTemplate();
//		
//		MultiValueMap<String, String> parametersMap = new LinkedMultiValueMap<String, String>();
//		parametersMap.add("CUST_ID", book.getUser().getId());
//		parametersMap.add("TXN_AMOUNT", book.getPrice());
//		parametersMap.add("ORDER_ID",order_id );
//		
//		ModelAndView Payment =  restTemplate.postForObject("http://localhost:9009/pgredirect",parametersMap,ModelAndView.class );
//		
	    repository2.save(book.getBookingDetails());
	    
	    for(BookingDetails i:book.getPassengerList()) {
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
		 return book ;
	}
	
	@GetMapping("/showTicket/{pnr}")
	public Booking getBookedTicket(@PathVariable("pnr") String pnr) {
		Booking book =repository.findPnr(pnr);
		return book;
	}
	
//	@GetMapping("/findTrain/{name}")
//	public Train[] getBooking(@PathVariable("name") String name) {
//		RestTemplate restTemplate = new RestTemplate();
//		
//		Train[] train =  restTemplate.getForObject("http://localhost:8086/trainSearch/findByTrainName/"+name, Train[].class);
//		return  train;
//	}
	
	
//	
//	@GetMapping("/findAllUsers")
//	public List<Passenger> getAllUsers(@RequestBody Passenger user) {
//		List<Passenger> allUsers =repository.findAll();
//		return allUsers;
//	}
//	
//	@GetMapping("/findAllUser/{id}")
//	public Optional<Passenger> getAllUser(@PathVariable int id) {
//		return repository.findById(id);
//	}
//	
//	@DeleteMapping("/delete/{id}")
//	public String deleteUser(@PathVariable int id) {
//		 repository.deleteById(id);
//		 return "Passenger deleted with id :"+id;
//	}
}