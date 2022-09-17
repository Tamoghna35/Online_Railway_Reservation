package io.railway.train.service;


import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.railway.train.entity.TimeTable;
import io.railway.train.repository.TimeTableRepo;

@Service
public class TimeTableService {
	
	@Autowired
	private TimeTableRepo ttrepo;
	
	public TimeTable addRecord(TimeTable tt) {
		return ttrepo.save(tt);
	}
	
	public TimeTable fetchDetails(String date) throws ParseException 
	{
		DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		Date date1 = formatter.parse(date);
		return ttrepo.getTrain(date1);
	}
	
	public List<TimeTable> getAvailableTrains(String date) throws ParseException{
		
		DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		Date date1 = formatter.parse(date);
		return ttrepo.availableTrains(date1);
	}
	
	public String removeTrains(String date) throws ParseException {
		DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		Date date1 = formatter.parse(date);
		 ttrepo.deleteRecord(date1);
		 return "Records before "+date+" are deleted successfully, if any";
	}
	
	
}
