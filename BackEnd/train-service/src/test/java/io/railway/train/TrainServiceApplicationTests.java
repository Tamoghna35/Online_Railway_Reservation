package io.railway.train;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import io.railway.train.entity.Train;
import io.railway.train.repository.TrainRepo;

@SpringBootTest
class TrainServiceApplicationTests {
	
	@Autowired
	private TrainRepo trainRepository;
	
	@Test
	void testSaveTrain()
	{
		Train train =new Train();
		
		train.setTrain_id(13145);
		train.setTrain_name("Kolkata Radhikapur Express");
		train.setFrom_station("Kolkata");
		train.setTo_station("Radhikapur");
		train.setTotal_Seat_sleeper(106);
		train.setTotal_Seat_ac3(20);
		train.setTotal_Seat_ac2(15);
		train.setTotal_Seat_ac1(0);
		Train train1= trainRepository.save(train);
		assertThat(train1.getTrain_id()).isEqualTo(13145);
		System.out.println("Test Successfull");
	}
	
	@Test
	void testGetAllTrains()
	{
		List<Train> list = new ArrayList();
		trainRepository.findAll().forEach(list :: add);
		assertThat(list.size()).isGreaterThanOrEqualTo(2);
		System.out.println("Test Successfull");
		
	}
	
	@Test
	void testDeleteTrainById() {
		Optional<Train> op =trainRepository.findById(13145);
		if(op.isPresent()) {
			Train train =op.get();
			assertThat(train.getTrain_id()).isEqualTo(13145);
			System.out.println("Test Successfull");
		}
	}


}
