package io.railway.train.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import io.railway.train.entity.TimeTable;

public interface TimeTableRepo extends MongoRepository<TimeTable, Integer>{
	
	//Query to find the train greater than to a particular date
	@Query("{date:{$gte: ?0}}")
	public List<TimeTable> availableTrains(Date date);
	
	@Query("{date : ?0}")
	public TimeTable getTrain(Date date);
	
	//Query to delete train on the dates which are less than a particular date
	@Query(value="{date : {$lt : ?0}}", delete = true)
	public void deleteRecord(Date date);

}
