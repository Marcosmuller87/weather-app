import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  city:string = '';
  query:boolean = false;
  temp:number = 0;
  humidity:number = 0;
  weather:string = '';
  loading:boolean = false;
  displayError:boolean = false;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getWeather() {
    this.query = false;
    this.loading = true;

    this._weatherService.getWeatherData(this.city).subscribe(data => {
      this.temp = Math.round(data.main.temp -273.15);
      this.humidity = data.main.humidity;
      this.weather = data.weather[0].main;
      this.query = true;
      this.loading = false;
    }, error => {
      this.loading = false;
      this.error()
    })
  }

  error() {
    this.displayError = true;
    setTimeout(() => {
      this.displayError = false;
      this.city = '';
    }, 3000)
  }

}
