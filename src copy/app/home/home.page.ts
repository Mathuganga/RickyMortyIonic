import { Component, OnInit, ViewChild } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { IonInfiniteScroll } from '@ionic/angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  constructor(public apiservice: ApicallService) {
  }
  data :any;
  ngOnInit() {
  // To load the data initially when the app is loaded
    // this.FetchAllList(this.url);
    // this.apiservice.getCombinedData(this.url).subscribe(response => {
    //   console.log(response);
    // });d
    this.data = {
        totalProjCost: '11.25',
        totalBankFinance: '0.00',
        ROOT: {
          RETURN_MESSAGE: '',
          RETURN_TYPE: ''
        },
        financingGap: '0.00',
        financePlan: [
          {
            financiarId: 'BORR',
            financiarDesc: 'Borrower/Recipient',
            financeAmount: 0.75,
            financePercentage: 3.33,
            financeAmountDisplay: '0.75'
          },
          {
            financiarId: 'EUDF',
            financiarDesc: 'European Commission Development Fund - TF',
            financeAmount: 10.5,
            financePercentage: 46.67,
            financeAmountDisplay: '10.50'
          },
          {
            financiarId: 'PC',
            financiarDesc: '',
            financeAmount: 11.25,
            financePercentage: 50.0,
            financeAmountDisplay: '11.25'
          }
        ]
      }
  }
  ionViewDidEnter() {
   this.plotSimplePieChart();
  }
  loadData(event) {
  }

    // To get the charecters from using RickMorty API
    plotSimplePieChart() {
      const jsonarr = [];
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.data.financePlan.length; i++) {
        jsonarr.push([this.data.financePlan[i].financiarDesc, this.data.financePlan[i].financeAmount]);
      }
      const myChart = Highcharts.chart('simplePie', {

        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Browser market shares in January, 2018'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: 'black'
              }
            }
          }
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          type: undefined,
          data: jsonarr
        }]
      });
    }
}
