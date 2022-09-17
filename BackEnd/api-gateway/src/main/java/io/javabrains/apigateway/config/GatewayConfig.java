package io.javabrains.apigateway.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.javabrains.apigateway.SecurityFilter.JwtAuthenticationFilter;



@Configuration
public class GatewayConfig {
	
	@Autowired
	private JwtAuthenticationFilter filter;

	@Bean
	public RouteLocator routes(RouteLocatorBuilder builder) {
		return builder.routes().route("user-admin-service", r -> r.path("/api/auth/**").filters(f -> f.filter(filter)).uri("lb://user-admin-service"))
				.route("train-service", r -> r.path("/trainSearch/**").filters(f -> f.filter(filter)).uri("lb://train-service"))
				.route("train-service", r -> r.path("/trainSearch/**").filters(f -> f.filter(filter)).uri("lb://train-service"))
				.build();
	}

}
