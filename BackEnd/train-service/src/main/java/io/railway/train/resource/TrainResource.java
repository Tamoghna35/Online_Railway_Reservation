package io.railway.train.resource;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import io.railway.train.entity.Request;
import io.railway.train.entity.TimeTable;
import io.railway.train.entity.Train;
import io.railway.train.repository.TrainRepo;
import io.railway.train.service.TimeTableService;
import io.railway.train.service.TrainService;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/trainSearch")
public class TrainResource {

	private static int idd = 1;

	@Autowired
	private RestTemplate template;
	@Autowired
	private TrainService tservice;

	@Autowired
	private TimeTableService ttservice;

	// POST METHOD
	@PostMapping("/saveTrain")
	public Train saveTrain(@RequestBody Train train) {
		Train train1 = tservice.saveTrain(train);
		return train1;

	}

	@GetMapping("/getById/{id}")
	public Train getTrainById(@PathVariable("id") int id) {
		Train train = tservice.findTrainById(id);
		return train;
	}

	@GetMapping("/getTrainInBetweenTwoStations/{from}/{to}")
	public List<Train> getTrain(@PathVariable("from") String from, @PathVariable("to") String to) {

		try {
			List<Train> trainList = tservice.trainsBetweenStations(from, to);
			return trainList;
		} catch (Exception e) {
			System.out.println(e);
		}
		return null;

	}

	@GetMapping("/findTrainByName/{name}")
	public List<Train> findByName(@PathVariable("name") String name) {
		return tservice.findTrainByName(name);
	}

	// GET METHOD

	@GetMapping("/allTrains")
	public List<Train> getAllTrains() {
		List<Train> list = tservice.findAll();
		return list;

	}

	// UPDATE METHOD
	@PutMapping("/updateById/{train_id}")
	public Train updateTrain(@PathVariable("train_id") int train_id, @RequestBody Train train0) {
		Train oldTr = tservice.findTrainById(train_id);
		oldTr.setFrom_station(train0.getFrom_station());
		oldTr.setTo_station(train0.getTo_station());
		oldTr.setTotal_Seat_ac1(train0.getTotal_Seat_ac1());
		oldTr.setTotal_Seat_ac2(train0.getTotal_Seat_ac2());
		oldTr.setTotal_Seat_ac3(train0.getTotal_Seat_ac3());
		oldTr.setTotal_Seat_sleeper(train0.getTotal_Seat_sleeper());
		oldTr.setTrain_name(train0.getTrain_name());
		//oldTr.setBase_fare(train0.getBase_fare());
		tservice.saveTrain(oldTr);
		return oldTr;

	}

	// DELETE METHOD
	@DeleteMapping("/deleteTrainbyid/{train_id}")
	public ResponseEntity<String> deleteById(@PathVariable("train_id") int train_id) {
		tservice.deleteById(train_id);
		return new ResponseEntity<String>("Delete Successfully", HttpStatus.OK);

	}

	// -----------------------------------------TimeTable related Operations--------------------------------------------------

	@GetMapping("/getTrains/DateFromTo/{date}/{from}/{to}")
	public List<TimeTable> getTrainFrom(@PathVariable("date") String date, @PathVariable("from") String from,
			@PathVariable("to") String to) throws ParseException {
		List<TimeTable> timetables = ttservice.getAvailableTrains(date);
		for (int i = 0; i < timetables.size(); i++) {
			List<Train> trainList = new ArrayList<Train>();
			for (Train tr : timetables.get(i).getTrains()) {

				if (tr.getFrom_station().equalsIgnoreCase(from) && tr.getTo_station().equalsIgnoreCase(to)) {
					trainList.add(tr);
				}
			}
			timetables.get(i).setTrains(trainList);
		}
		return timetables;
	}

	@PostMapping("/addTrainsToTable")
	public String modifyTable(@RequestBody Request request) throws ParseException {
		String datestring = request.getDatestring();
		System.out.println(datestring);
		Date today = new Date();
		final DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		String today_string = dateFormat.format(today);
		String delMsg = ttservice.removeTrains(today_string);
		System.out.println(delMsg);
		Calendar c = Calendar.getInstance();
		c.setTime(today);
		c.add(Calendar.DATE, 11);
		Date addedDate = c.getTime();
		System.out.println("Day is: " + addedDate.getDay());
		String NewDate = dateFormat.format(addedDate);
		System.out.println(NewDate);
		List<TimeTable> ttlist = ttservice.getAvailableTrains(NewDate);
		if (ttlist.isEmpty()) {
			// Add the new Record
			String days[] = { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" };
			String day_of_week = days[addedDate.getDay() - 1];
			List<Train> list1 = tservice.findAll();// Here I change
			List<Train> list2 = new ArrayList<Train>();
			for (Train trn : list1) {
				if (trn.getRuns_on().contains(day_of_week)) {
					list2.add(trn);
				}
			}
			TimeTable timeTable = new TimeTable();
			timeTable.setId(idd);
			timeTable.setDate(NewDate);
			timeTable.setTrains(list2);
			ttservice.addRecord(timeTable);
			idd++;
			return "Time Table updated";
		}
		return "No changes required";
	}

	@PutMapping("/changeSeat/Train/{today}")
	public String updateSeats(@PathVariable("today") String today, @RequestBody Train train2) throws ParseException {
		TimeTable tt1 = ttservice.fetchDetails(today);
		List<Train> tlist = tt1.getTrains();
		for (Train train : tlist) {
			if (train.getTrain_id() == train2.getTrain_id()) {
				train.setTotal_Seat_ac1(train2.getTotal_Seat_ac1());
				train.setTotal_Seat_ac2(train2.getTotal_Seat_ac2());
				train.setTotal_Seat_ac3(train2.getTotal_Seat_ac3());
				train.setTotal_Seat_sleeper(train2.getTotal_Seat_sleeper());
				break;
			}
		}
		tt1.setTrains(tlist);
		ttservice.addRecord(tt1);
		return train2.getTrain_name() + "'s seat count for " + today + " is updated";
	}

}
