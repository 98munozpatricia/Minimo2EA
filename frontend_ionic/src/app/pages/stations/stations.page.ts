import { Component, OnInit } from '@angular/core';
import {StationService} from '../../services/station.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.page.html',
  styleUrls: ['./stations.page.scss'],
})
export class StationsPage implements OnInit {


  constructor(private data: StationService) { }
  stations: Object = this.data.stations

  ngOnInit() {
    this.data.getStations().subscribe(data => {
      this.stations = data
      this.data.stations = data
      console.log(this.stations);
    });
  }
  details(station: Object){
    this.data.station = station;
  }
 
}
