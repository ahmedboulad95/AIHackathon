import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { DataService } from '../../services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  public selectedStore:string;
  public gender:string;
  public homeOwner:string;
  public hasKids:string;
  public metro:string;
  public urban:string;
  public maritalStatus:string;
  public chartReady:Boolean = false;
  public lor:number;
  public numAdults:number;
  public stores:string[] = ['Lowe\'s', 'Home Depot'];

  constructor(private dataService:DataService, public ref: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('In OnInit');
    

  }

  showStore() {
    console.log(this.numAdults);
  }

  setStore(store) {
    this.selectedStore = store;
  }

  setGender(store) {
    this.gender = store;
  }

  setNumAdults(store) {
    this.numAdults = store;
  }

  setLOR(store) {
    this.lor = store;
  }

  setHomeOwner(store) {
    this.homeOwner = store;
  }

  setHasKids(store) {
    this.hasKids = store;
  }

  setMetro(store) {
    this.metro = store;
  }

  setUrban(store) {
    this.urban = store;
  }

  setMarital(store) {
    this.maritalStatus = store;
  }

  /*
  // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
  */

  // Bar
  public barChartLabels:string[];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [], label: 'Series A'}
  ];

  public tempBarData = [];

  public getStoreInfo() {
    console.log('here');
    let store = '%22' + this.selectedStore.split(' ').join('%20') + '%22';
    store = store.split('\'').join('%27');
    console.log(store);

    this.dataService.getStoreBarInfo(store).subscribe((data) => {
      console.log("Data: " + data);
      /*this.tempBarData = data;

      var chartData = [];
      var chartLabels = [];
      for(let i of this.tempBarData) {
        chartData.push(i.numberOfVisits);
        chartLabels.push(i.cityName);
      }
      this.barChartData[0].data = chartData;
      this.barChartLabels = chartLabels;
      this.chartReady = true;
      console.log('Bar Chart Data: ' + this.barChartData);*/
    });
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
