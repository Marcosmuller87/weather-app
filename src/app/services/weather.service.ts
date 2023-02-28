import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  key:string = 'b4e5ffe4f05300ea44042039ee97b070'
  url:string = 'https://api.openweathermap.org/data/2.5/weather?'

  constructor(private http: HttpClient) { }

  getWeatherData(city:string): Observable<any> {
    return this.http.get(`${this.url}&q=${city}&appid=${this.key}`);
  }
}
