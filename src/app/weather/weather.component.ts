import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
weather = null;
name = "";
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getCurrentWeather();
  }
  getCurrentWeather(): void {
    this.weatherService.getCurrent(this.name).subscribe( (data) => this.weather = data);
  
  }
}
