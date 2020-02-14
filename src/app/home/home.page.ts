import { Component, OnInit, ViewChild } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  errorflag: any;
  totalResults: any;
  infiniteScrollEnabled = true;
  listarray = [];
  // initial url as provided in api documents to fetch all characters
  url = 'https://rickandmortyapi.com/api/character/';
  urlnext: any;
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  locationarray: any[];
  constructor(public apiservice: ApicallService) {
    this.listarray = [];
    this.locationarray = [];
  }
  ngOnInit() {
  // To load the data initially when the app is loaded
    this.FetchAllList(this.url);
  }
  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      // if the array length have been reached the total length the scroll will be disabled
      if (this.listarray.length === this.totalResults) {
        event.target.disabled = true;
      } else {
        // If not again the api is called from the urlnex which will be provided in the response
        this.FetchAllList(this.urlnext);
      }
    }, 500);
  }

    // To get the charecters from using RickMorty API
  FetchAllList(url) {
    this.locationarray = [];
    this.apiservice.getCharacters(url).subscribe(
      response => {
        this.totalResults = response.info.count;
        this.listarray = [...this.listarray, ...response.results];
        this.urlnext = response.info.next;
      },
      err => {
        this.errorflag = true;
        // console.log('er', err);
      },
      () => {
      }
    );
  }
}
