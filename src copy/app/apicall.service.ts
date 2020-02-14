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
  public getCombinedData(url): Observable<any> {
    return this.http.get(url)
    .pipe(
      map((result: any) => {
        // tslint:disable-next-line: no-string-literal
        // console.log('oops', result['results']);
        // tslint:disable-next-line: no-string-literal
        const allIds =  result['results'].map(id => {
          // tslint:disable-next-line: no-string-literal
          // console.log(id['location']['url']);
          // tslint:disable-next-line: no-string-literal
          if (id['location'] && id['location']['url']) {
            // this.http.get()
            // tslint:disable-next-line: no-string-literal
            // console.log(id['location']['url']);
            // tslint:disable-next-line: no-string-literal
            const urllo = id['location']['url'];
            console.log('loc', urllo);
            // let total = result['results'] + urllo;
            // console.log('total', total)
          }
            // tslint:disable-next-line: no-string-literal
                      // tslint:disable-next-line: no-string-literal
              // this.http.get(id['location']['url']);
          });
        // tslint:disable-next-line: deprecation
        // return forkJoin(...allIds).pipe(
        //   map((idDataArray) => {
        //     result.contact.forEach((eachContact, index) => {
        //       eachContact.relationship = idDataArray[index];
        //     });
        //     console.log('result', result);
        //     return result;
        //   })
        // );
      })
    );
}
public get(id): Observable<any> {
  return this.http.get('http://localhost:3000/contact/' + id);
}

public getMultipleRelationData(): Observable<any> {
  return this.http.get('http://localhost:3000/contact');
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
