import { Injectable } from '@angular/core';
import { EnvironmentService } from './environment.service';
import {HttpClient} from "@angular/common/http";
import { Station } from "../models/station";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationService {


  stations
  station
  bikes
  unbikes
  constructor(private http: HttpClient) { }
  
 
  getStations(){
    return this.http.get(' http://localhost:8080/api/v1/station')
  }
  getBikes(){
    return this.http.get('http://localhost:8080/api/v1/bike')
  }
  getUnassingnedBikes(){
    return this.http.get('http://localhost:8080/api/v1/unassignedbikes')
  }
  deleteBike(bikeId){
    return this.http.delete('http://localhost:8080/api/v1/bike/delete',bikeId)
  }
  addBikeToStation(bikeId, stationId){
    return this.http.post('http://localhost:8080/api/v1/stations/addbike', bikeId, stationId)
  }
 getbikedetail(stationId){
 
    return this.http.get('http://localhost:8080/api/v1/bikedetail/',stationId)
  }
}
