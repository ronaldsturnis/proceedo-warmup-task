import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PopularMoviesService {
  constructor(private http: HttpClient) {}

  getPopularMovies() {
    let params = new HttpParams().set('api_key', environment.apiKey);

    return this.http.get<any>(`${environment.apiURL}/movie/popular`, {
      params: params,
    });
  }
}
