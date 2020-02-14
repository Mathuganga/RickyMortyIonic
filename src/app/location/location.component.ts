import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';
import { ApicallService } from '../apicall.service';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit, OnChanges {
  @Input() listData;
  data: any;
  display: any;
  constructor(public apiservice: ApicallService) {}
  ngOnChanges(change: SimpleChanges) {
    this.data = this.listData;
  }

  ngOnInit() {
    this.Fetchlocation(this.data);
  }
  Fetchlocation(url) {
    // to get location
    this.apiservice.getCharacters(url).subscribe(
      response => {
        this.display = response;
      },
      err => {},
      () => {}
    );
  }
}
