import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tache } from '../../shared/Models/Taches/tache.model';
import { TacheService } from '../../shared/Services/Taches/tache.service';
import { Chart } from 'node_modules/chart.js'
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute,
    private TacheService: TacheService) { }

  ngOnInit(): void {
    this.getIdUrl();
    this.getTaskDetails();
    this.Charts();
  }

  //get id in URl
  TaskId: number;
  tache: Tache = new Tache();
  getIdUrl() {
    this.routeSub = this.route.params.subscribe(params => {
      this.TaskId = params['id']
    });

   
  }

  // getTask
  getTaskDetails() {
    this.TacheService.GetById(this.TaskId).subscribe(res => {
      this.tache = res
    
    })
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  //Calculate diffrence date

  calculateDiff(dateSent) {
    let currentDate = new Date();
    dateSent = new Date(dateSent);

    return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())) / (1000 * 60 * 60 * 24));
  }

  //Create Chart

  Labels: string[];
  ChartData: number[];
  chart = [];


  Charts() {
    this.TacheService.GetById(this.TaskId).subscribe(res => {
      this.tache = res

      let a: number;
      let b: number;
      let c: number;
      a = +this.tache.delai;
      b = this.calculateDiff(this.tache.date)
      if (a > b)
        c = a - b;
      else
        c = 0;
      this.Labels = ['الوقت المنتهي ', 'الوقت  المتبقي'];
      this.ChartData = [this.calculateDiff(this.tache.date), c];

      this.chart = new Chart('canvas', {
        type: 'doughnut',
        data: {
          labels: this.Labels,
          datasets: [
            {
              data: this.ChartData,
              borderColor: '#ffffff',
              backgroundColor: [
                "#398733",
                "#4287f5",
                "#9966FF",
                "#4C4CFF",
                "#00FFFF",
                "#f990a7",
                "#aad2ed",
                "#FF00FF",
              ],
              fill: true
            }
          ]
        },
        options: {
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }],
          }
        }
      });
    });
  }

}
