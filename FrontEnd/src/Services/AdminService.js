import httpClient from "../http-common_Admin";
class AdminService {
  getToken(data) {
    return httpClient.post("/api/auth/signin", data);
  }
}

export default new AdminService();