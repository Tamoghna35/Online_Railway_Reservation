package com.micros.booking.repository;



import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.micros.booking.entity.Booking;

public interface BookingRepository extends MongoRepository<Booking, Integer> {

	@Query("{userId: ?0}")
	List<Booking> findByBooking(String userId);
	
	@Query("{pnr: ?0}")
	Booking findPnr(String pnr);
}