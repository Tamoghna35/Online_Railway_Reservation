import httpClient from "../http-common_booking";
class bookingService {
  createBooking(data) {
    return httpClient.post("/Booking-details/addBooking-details/", data);
  }

  createBooking1(data) {
    return httpClient.post("/Booking/addBooking/", data);
  }
  test(data) {
    return httpClient.post("/Booking/home", data);
  }
}
export default new bookingService();