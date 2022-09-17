package io.railway.train.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.railway.train.entity.Train;
import io.railway.train.repository.TrainRepo;

@Service
public class TrainService {
	@Autowired
	private TrainRepo trepo;

	// To Insert new Train
	public Train saveTrain(Train train) {
		return trepo.save(train);

	}

	// To update a record
	public void update(Train train) {
		trepo.save(train);
	}

	// To Delete a record
	public String deleteById(int train_id) {
		trepo.deleteById(train_id);
		return "Train is deleted";
	}

	public List<Train> findAll() {

		List<Train> list = new ArrayList<>();
		trepo.findAll().forEach(list::add);
		return list;
	}

	public Train findTrainById(int train_id) {

		return trepo.findById(train_id).get();
	}

	public List<Train> trainsBetweenStations(String from_station, String to_station) {
		
		return trepo.findTrainInBetween(from_station,to_station);
	}

	public List<Train> findTrainByName(String name){
		return trepo.trainName(name);
	}
	

}
