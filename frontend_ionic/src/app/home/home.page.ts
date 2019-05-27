import { Component } from '@angular/core';
import { StationService } from '../services/station.service';
import { ActivatedRoute } from '@angular/router';
import { Station } from '../models/station';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  station: Station;
  
  constructor(private activatedRoute: ActivatedRoute, private StationService: StationService) {
    this.station= new Station();
  }
  ngOnInit(){
    this.station._id = "5caf128799d1b20ba9d761e2"
   
  }
  

}
