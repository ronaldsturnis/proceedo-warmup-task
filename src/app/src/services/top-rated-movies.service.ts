import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMoviePage } from '../interfaces/IMoviePage';

@Injectable({
  providedIn: 'root',
})
export class TopRatedMoviesService {
  constructor(private http: HttpClient) {}

  getTopRatedMovies() {
    let params = new HttpParams().set('api_key', environment.apiKey);

    return this.http.get<IMoviePage>(`${environment.apiURL}/movie/top_rated`, {
      params: params,
    });
  }
}