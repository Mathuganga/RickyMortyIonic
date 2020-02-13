import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient) { }
  getCharacters(urlToFetchData?: string): Observable<IBaseResponse> {
  let url;
    if (urlToFetchData) {
      url = urlToFetchData;
    }
    return this.http
      .get<IBaseResponse>(url)
      .pipe(
        tap(
          characters => console.log(`fetched characters`),
          error => console.log(`error -> ${error}`)
        )
      );
  }
}

export interface IBaseResponse {
  info: string;
  results: [];
}

export class Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}