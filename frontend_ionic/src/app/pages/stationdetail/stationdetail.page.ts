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

  ngOnInit() {
    this.data.getBikes().subscribe(data => {
      this.bikes = data
      this.data.bikes = data
      console.log(this.bikes);
    });
  }
  delete(bikes: Object){
    this.data.bikes = bikes;
    this.data.deleteBike(this.data.bikes._id)
    console.log(this.bikes);
  }
  
}
