import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../../../shared/Services/AdministrativeCommunication/transaction.service';
import { Transaction } from '../../../../shared/Models/AdministrativeCommunication/transaction.model';
import { ReceptionService } from '../../../../shared/Services/AdministrativeCommunication/reception.service';
import { Reception } from '../../../../shared/Models/AdministrativeCommunication/reception.model';
import { UserServiceService } from '../../../../shared/Services/User/user-service.service';
import { Chart } from 'node_modules/chart.js'
@Component({
  selector: 'app-transactions-elist',
  templateUrl: './transactions-elist.component.html',
  styleUrls: ['./transactions-elist.component.css']
})
export class TransactionsElistComponent implements OnInit {

  constructor(private transactionService: TransactionService,
    private receptionService: ReceptionService,
    private UserService: UserServiceService, ) { }

  ngOnInit(): void {
    this.getUserConnected();
    this.transactionsDetails();
    this.chartslist();

  }


  transactionListE: Transaction[] = [];
  transactionList: Transaction[] = [];
  transactionListFiltredE: Transaction[] = [];
  transactionListFiltred: Transaction[] = [];
  recue: number;
  emise: number;
  receptiontr: number;
  receptionte: number
  receptionList: Reception[] = [];
  receptionListE: Reception[] = [];
  receptionListFiltreE: Reception[] = [];
  receptionListFiltre: Reception[] = [];
  transactionsDetails() {
    this.transactionService.List().subscribe(res => {
      this.transactionList = res
      this.recue = this.transactionList.length;
    }
    );


    this.transactionService.ListE().subscribe(res => {
      this.transactionListE = res
      this.emise = this.transactionListE.length;
    }
    );


    this.receptionService.ListReception().subscribe(res => {
      this.receptionList = res

      this.receptionListFiltre = this.receptionList.filter(item => item.idUser == this.UserIdConnected);
      this.receptiontr = this.receptionListFiltre.length;
      console.log(this.receptiontr)
      console.log(this.receptionListFiltre)
    });



    this.receptionService.ListReceptionE().subscribe(res => {
      this.receptionListE = res
      this.receptionListFiltreE = this.receptionListE.filter(item => item.idUser == this.UserIdConnected);
      this.receptionte = this.receptionListFiltreE.length;
    });
  }


  // Get User Connected

  UserIdConnected: string;
  UserNameConnected: string;
  adminisgtrationName: any; adminId: number;

  getUserConnected() {

    this.UserService.getUserProfileObservable().subscribe(res => {
      this.UserIdConnected = res.id;
      this.UserNameConnected = res.fullName;

    })

  }


  Labels: string[];
  ChartData: number[];
  chart = [];
  nbcreated: number;
  nbdone: number;
  listtrc: Transaction[] = [];
  listtrcF: Transaction[] = [];
  chartslist() {
    this.transactionService.ListE().subscribe(res => {
      this.listtrc = res
      this.nbcreated = this.listtrc.length;
      this.listtrcF = this.listtrc.filter(item => item.etat == "مستلمة")
      this.nbdone = this.listtrcF.length;


      this.Labels = ['المعاملات المستلمة ', 'المعاملات غير المستلمة'];


      this.ChartData = [this.nbdone, this.nbcreated];

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

    })
  }
}
