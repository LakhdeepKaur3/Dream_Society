import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent {

  //Doughnut
  public doughnutChartLabels:string[] = ['Allotted Flats', 'Available Flats', 'Flats on Maintenance',' Flats on Construction',' Planing of New Flats '];
  public doughnutChartData:number[] = [450, 200, 30,300,100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 

}
