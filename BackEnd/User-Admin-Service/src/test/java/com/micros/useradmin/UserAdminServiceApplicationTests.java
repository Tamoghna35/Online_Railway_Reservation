package com.micros.useradmin;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.micros.useradmin.entity.TrainUser;
import com.micros.useradmin.repo.UserRepo;
import com.micros.useradmin.service.UserService;

@SpringBootTest
class UserAdminServiceApplicationTests {

	@MockBean
	private UserRepo userRepository;
	
	@Autowired
	private UserService uservice;
	
	
	TrainUser user =new TrainUser();
	TrainUser compareUser = new TrainUser();
	List<TrainUser> list = new ArrayList<>();
	
	@BeforeEach
	public void setup() {
		user.setUsername("Zenith");
		user.setEmail("Zenith1234@gmail.com");
		user.setPassword("Zenith123");
		
		
		compareUser.setUsername("Souvic4567");
		compareUser.setEmail("souvic2000@gmail.com");
		compareUser.setPassword("souvic2000");
		
		list.add(user);
		list.add(compareUser);
	}
	
	@Test
	public void testSave() {
		Mockito.when(userRepository.save(user)).thenReturn(user);
		assertEquals(user,uservice.createUser(user));
	}
	
	@Test
	public void testUpdate() {
		user.setEmail("samruddhi2000@gmail.com");
		Mockito.when(userRepository.save(user)).thenReturn(user);
		assertEquals("samruddhi2000@gmail.com",uservice.createUser(user).getEmail());
	}
	
	@Test
	public void testDeleteByEmailId() {
		Mockito.when(userRepository.findById("souvic2000@gmail.com")).thenReturn(Optional.of(user));
		uservice.deleteByEmailId("souvic2000@gmail.com");
		 Mockito.verify(userRepository, Mockito.times(1)).deleteByEmail("souvic2000@gmail.com");;
	}

}
