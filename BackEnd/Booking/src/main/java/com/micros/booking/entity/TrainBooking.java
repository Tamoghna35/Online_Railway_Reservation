package com.micros.booking.entity;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Train_Booking")
public class TrainBooking {

	@Id
	private String pnr;
	@Indexed(unique = true)
	private long ticket_no;
	private LocalDate date;
	private LocalTime time;
//	private double fare;
	private Train train;
	private int user_id;
	private List<Passenger> passengers;
	private List<Integer> seat;

	public TrainBooking() {
		super();
		// TODO Auto-generated constructor stub
	}


	public TrainBooking(String pnr, long ticket_no, LocalDate date, LocalTime time, Train train, int user_id,
			List<Passenger> passengers, List<Integer> seat) {
		super();
		this.pnr = pnr;
		this.ticket_no = ticket_no;
		this.date = date;
		this.time = time;
		this.train = train;
		this.user_id = user_id;
		this.passengers = passengers;
		this.seat = seat;
	}


	public String getPnr() {
		return pnr;
	}


	public void setPnr(String pnr) {
		this.pnr = pnr;
	}


	public long getTicket_no() {
		return ticket_no;
	}


	public void setTicket_no(long ticket_no) {
		this.ticket_no = ticket_no;
	}


	public LocalDate getDate() {
		return date;
	}


	public void setDate(LocalDate date) {
		this.date = date;
	}


	public LocalTime getTime() {
		return time;
	}


	public void setTime(LocalTime time) {
		this.time = time;
	}


	public Train getTrain() {
		return train;
	}


	public void setTrain(Train train) {
		this.train = train;
	}


	public int getUser_id() {
		return user_id;
	}


	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}


	public List<Passenger> getPassengers() {
		return passengers;
	}


	public void setPassengers(List<Passenger> passengers) {
		this.passengers = passengers;
	}


	public List<Integer> getSeat() {
		return seat;
	}


	public void setSeat(List<Integer> seat) {
		this.seat = seat;
	}


	@Override
	public String toString() {
		return "TrainBooking [pnr=" + pnr + ", ticket_no=" + ticket_no + ", date=" + date + ", time=" + time
				+ ", train=" + train + ", user_id=" + user_id + ", passengers=" + passengers + ", seat=" + seat + "]";
	}

	
	
}
