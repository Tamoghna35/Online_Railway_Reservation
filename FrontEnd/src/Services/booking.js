import httpClient from "../http-common_booking";
class bookingService {

  getBooking(id) {
    return httpClient.get(`/Booking/allBookingsWithOfUsers/${id}`);
  }

  getPnr(pnr) {
    return httpClient.get(`/Booking/showTicket/${pnr}`);
  }

  createBooking1(data) {
    return httpClient.post("/Booking/addBooking/", data);
  }
  test(data) {
    return httpClient.post("/Booking/home", data);
  }
}
export default new bookingService();