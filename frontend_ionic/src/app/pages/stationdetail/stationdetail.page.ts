import { Component, OnInit } from '@angular/core';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-stationdetail',
  templateUrl: './stationdetail.page.html',
  styleUrls: ['./stationdetail.page.scss'],
})
export class StationdetailPage implements OnInit {

  

  constructor(private data: StationService) { }
  bikes: Object = this.data.stations
  unbikes: Object = this.data.stations

  ngOnInit() {
    console.log(this.data.station._id);
    this.data.getBikes().subscribe(data => {
      this.bikes = data
      this.data.bikes = data
      console.log(this.bikes);
    });
      this.data.getUnassingnedBikes().subscribe(data => {
      this.unbikes = data
      this.data.unbikes = data
      console.log(this.bikes);
    });
  }
  delete(bikes: Object){
    this.data.bikes = bikes;
    this.data.deleteBike(this.data.bikes._id)
    console.log(this.bikes);
  }
  assign(unbikes: Object){
    this.data.unbikes = unbikes;
    this.data.addBikeToStation(this.data.bikes._id, this.data.station._id)
    console.log(this.bikes);
  }
  
}
