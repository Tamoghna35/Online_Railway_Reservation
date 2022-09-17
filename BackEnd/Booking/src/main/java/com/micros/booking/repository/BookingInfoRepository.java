package com.micros.booking.repository;



import org.springframework.data.mongodb.repository.MongoRepository;

import com.micros.booking.entity.BookingInfo;

public interface BookingInfoRepository extends MongoRepository<BookingInfo, Integer> {

}