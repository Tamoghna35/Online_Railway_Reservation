package com.micros.booking.repository;



import org.springframework.data.mongodb.repository.MongoRepository;

import com.micros.booking.entity.Booking;

public interface BookingRepository extends MongoRepository<Booking, Integer> {

}