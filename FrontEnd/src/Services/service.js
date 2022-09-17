import httpClient from "../http-common";

class service {
  create(data) {
    return httpClient.post("/auth/signup", data);
  }
  getToken(data) {
    return httpClient.post("/auth/signin", data);
  }

  getTrains(from, to, token) {
    return httpClient.get(`users/getByStaions/${from}/${to}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}
export default new service();
