import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = "e2ec642cff334ed77fa058ea3806f89a"
  apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=a2ebd0871556e4cbaa61338e7a5b85fb&lang=fr&q=`;

  constructor(private http: HttpClient) { }
  getCurrent(name): Observable<any>{
    return this.http.get(this.apiUrl + name);
  }
}
