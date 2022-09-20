import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMoviePage } from '../models/IMoviePage.model';

@Injectable({
  providedIn: 'root',
})
export class PopularMoviesService {
  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<IMoviePage> {
    const params = new HttpParams().set('api_key', environment.apiKey);

    return this.http.get<IMoviePage>(`${environment.apiURL}/movie/popular`, { params: params });
  }
}
