package io.railway.train.entity;

import org.springframework.stereotype.Component;

@Component
public class Request {

	private String datestring;

	public Request() {

	}

	public Request(String datestring) {
		this.datestring = datestring;
	}

	public String getDatestring() {
		return datestring;
	}

	public void setDatestring(String datestring) {
		this.datestring = datestring;
	}

}
