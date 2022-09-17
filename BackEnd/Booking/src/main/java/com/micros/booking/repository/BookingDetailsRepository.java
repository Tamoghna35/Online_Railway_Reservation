package com.micros.booking.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.micros.booking.entity.BookingDetails;

public interface BookingDetailsRepository extends MongoRepository<BookingDetails, Integer> {

}
