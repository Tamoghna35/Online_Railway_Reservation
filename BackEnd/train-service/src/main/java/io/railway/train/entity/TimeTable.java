package io.railway.train.entity;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "timetable")
public class TimeTable {

	@Id
	private int id;
	private List<Train> trains;
	private Date date;

	public TimeTable() {

	}

	public TimeTable(int id, List<Train> trains, Date date) {
		this.id = id;
		this.trains = trains;
		this.date = date;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public List<Train> getTrains() {
		return trains;
	}

	public void setTrains(List<Train> trains) {
		this.trains = trains;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(String date) throws ParseException {
		DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		Date date1 = formatter.parse(date);
		this.date = date1;
	}

}
