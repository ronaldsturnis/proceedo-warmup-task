import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMovieDetails } from '../models/IMovieDetails.model';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsService {
  constructor(private http: HttpClient) {}

  getMovieDetails(movieId: number): Observable<IMovieDetails> {
    let params = new HttpParams().set('api_key', environment.apiKey);

    return this.http.get<IMovieDetails>(`${environment.apiURL}/movie/${movieId}`, { params: params });
  }
}
