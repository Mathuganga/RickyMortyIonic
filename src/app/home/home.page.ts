import { Component, OnInit, ViewChild } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
errorflag:any
  totalResults: any;
  infiniteScrollEnabled=true;
  listarray=[];
  url  ='https://rickandmortyapi.com/api/character/';
  urlnext: any;
  @ViewChild(IonInfiniteScroll,{static:false}) infiniteScroll: IonInfiniteScroll;
  constructor(public apiservice:ApicallService) {
    this.listarray = [];

  }
ngOnInit()
{
  // let data=this.apiservice.getCharacters();
 this.FetchAllList(this.url);
} 
  loadData(event)
  {
setTimeout(() => { 
  event.target.complete();
  if (this.listarray.length ==this.totalResults ) {
    event.target.disabled = true;
  }
  else
  {
    this.FetchAllList(this.urlnext);
  }
}, 500);
  }

  FetchAllList(url)
  {
    this.apiservice.getCharacters(url).subscribe(response => {
      this.totalResults=response.info['count']
      this.listarray =[...this.listarray,...response.results];
      this.urlnext =response.info['next'];
    },
    err => {
this.errorflag =true;
    },
    () => console.log('HTTP request completed.'));
  }
}
