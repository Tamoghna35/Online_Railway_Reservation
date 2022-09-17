import httpClient from "../http-common1";
class trainService {
  getTrains(from, to) {
    return httpClient.get(`/trainSearch/getTrainInBetweenTwoStations/${from}/${to}`, {
      // headers: { Authorization: `Bearer ${token}` },
    });
  }

  getTrainById(id){
    return httpClient.get(`/trainSearch/getById/${id}`)
  }

}
export default new trainService();