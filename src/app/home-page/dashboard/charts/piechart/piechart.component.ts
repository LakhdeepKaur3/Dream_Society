import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { Response} from '@angular/http';
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent  implements OnInit{
constructor(private appservice:DashboardService){}
data:any;
  //
//   piedata(){
//     this.appservice.getData().subscribe((response:Response)=>{
//  this.data=response.json();
//  console.log(this.data);

//     })
//   }
   // Pie
   public pieChartLabels:string[] = ['Pending Rent', 'Paid Rent', 'Adavance Rent'];
   public pieChartData:number[] = [900, 500, 100];
   public pieChartType:string = 'pie';
  
   // events
   public chartClicked(e:any):void {
     console.log(e);
   }
  
   public chartHovered(e:any):void {
     console.log(e);
   }
ngOnInit(){
  // this.piedata();
}
}
