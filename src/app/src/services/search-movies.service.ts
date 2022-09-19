import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMoviePage } from '../models/IMoviePage.model';

@Injectable({
  providedIn: 'root',
})
export class SearchMoviesService {
  constructor(private http: HttpClient) {}

  getSearchResults(searchQuery: string): Observable<IMoviePage> {
    const params = new HttpParams().set('api_key', environment.apiKey).set('query', searchQuery);

    return this.http.get<IMoviePage>(`${environment.apiURL}/search/movie`, { params: params });
  }
}
