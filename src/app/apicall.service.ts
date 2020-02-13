import { Injectable } from '@angular/core';
import { HttpClient , HttpResponse} from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { switchMap, tap, map, catchError, mergeMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { element } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  homeworld: any;
array = [];
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
          characters => console.log(),
          error => console.log(`error -> ${error}`)
        )
      );
  }
  }


export interface IBaseResponse {
  info: Info;
  results: [];
}

// tslint:disable-next-line: no-empty-interface
export interface T {
}
export class Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
