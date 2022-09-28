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

  getAllTrain() {
    return httpClient.get(`/trainSearch/allTrains`);
  }

  addTrain(data) {
    return httpClient.post(`/trainSearch/saveTrain`, data);
   
  }

  deleteTrain(id) {
    return httpClient.delete(`/trainSearch/deleteTrainbyid/${id}`);
  }

}
export default new trainService();