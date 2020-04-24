import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserServiceService } from '../../shared/Services/User/user-service.service';
import { UserDetail } from '../../shared/Models/User/user-detail.model';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-tasks-reports',
  templateUrl: './tasks-reports.component.html',
  styleUrls: ['./tasks-reports.component.css']
})
export class TasksReportsComponent implements OnInit {


  @ViewChild('htmlData') htmlData: ElementRef;

  constructor(private userService: UserServiceService,
   ) { }

  ngOnInit(): void {
    this.GetUsersList();
  }


  //Get users list
  UsersList: UserDetail[] = [];

  GetUsersList() {
    this.userService.GetUsersList().subscribe(res => {
      this.UsersList = res
    })
  }

  //Pdf
  public openPDF(): void {
   let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p', 'pt', 'a4');
    doc.setLanguage("ar-SA")
   
    doc.fromHTML(DATA.innerHTML, 15, 15);
    doc.text("سلام Hello", 200, 10, { lang: 'ar', align: 'right' });
    console.log(doc.getFontList());
    doc.output('dataurlnewwindow');

  }

  /*openPDF() {

  }*/
  
  public downloadPDF(): void {
    
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p', 'pt', 'a4');

    let handleElement = {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    doc.fromHTML(DATA.innerHTML, 15, 15, {
      'width': 200,
      'elementHandlers': handleElement
    });

    doc.save('angular-demo.pdf');
  }
}
