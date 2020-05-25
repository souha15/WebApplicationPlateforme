import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EtatUniteService } from '../../../shared/Services/Dotations/etat-unite.service';
import { UserServiceService } from '../../../shared/Services/User/user-service.service';
import { TypeUnite } from '../../../shared/Models/Dotations/type-unite.model';
import { TypeUniteService } from '../../../shared/Services/Dotations/type-unite.service';
import { UniteService } from '../../../shared/Services/Dotations/unite.service';
import { ToastrService } from 'ngx-toastr';
import { EtatUnite } from '../../../shared/Models/Dotations/etat-unite.model';
import { NgForm } from '@angular/forms';
import { Unite } from '../../../shared/Models/Dotations/unite.model';
import { Dotation } from '../../../shared/Models/Dotations/dotation.model';
import { DotationService } from '../../../shared/Services/Dotations/dotation.service';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-enregistrer-unite',
  templateUrl: './enregistrer-unite.component.html',
  styleUrls: ['./enregistrer-unite.component.css']
})
export class EnregistrerUniteComponent implements OnInit {

  @ViewChild('htmlData') htmlData: ElementRef;

  constructor(private etatService: EtatUniteService,
    private UserService: UserServiceService,
    private typeService: TypeUniteService,
    private uniteService: UniteService,
    private dotationService: DotationService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getUserConnected();
    this.EtatList();
    this.TypeList();
    this.DotationList();
    this.resetForm();
  }

  // User

  UserIdConnected: string;
  UserNameConnected: string;
  adminisgtrationName: any;

  getUserConnected() {

    this.UserService.getUserProfileObservable().subscribe(res => {
      this.UserIdConnected = res.id;
      this.UserNameConnected = res.fullName;
    })

  }

  // Etat

  etats: EtatUnite[] = [];

  EtatList() {
    this.etatService.Get().subscribe(res => {
      this.etats = res;
    })
  }

  // Types

  types: TypeUnite[] = [];

  TypeList() {
    this.typeService.Get().subscribe(res => {
      this.types = res;
    })
  }

  // Dotation

  dotations: Dotation[] = [];

  DotationList() {
    this.dotationService.Get().subscribe(res => {
      this.dotations=res
    })
  }

  // Save Unite

  unite: Unite = new Unite();
  uniteI: Unite = new Unite();

  date = new Date().toLocaleDateString();
  isValidFormSubmitted = false;
  onSubmit(form: NgForm) {
    this.unite.creatorName = this.UserNameConnected;
    this.unite.idUserCreator = this.UserIdConnected;
    this.unite.dateenreg = this.date;
    
    if (form.invalid) {
      this.isValidFormSubmitted = false;
    
    }

    else {
      this.isValidFormSubmitted=true
      this.uniteService.Add(this.unite).subscribe(
        res => {
          
          this.toastr.success("تمت الإضافة بنجاح", "نجاح");
          this.uniteI = this.unite
         // form.resetForm();

        },
        err => {
          console.log(err);
          this.toastr.warning('لم تتم الإضافة', ' فشل');
        }
      )
    }


  }

  resetForm(form?: NgForm) {

    if (form != null)
      form.resetForm();
    this.uniteService.formData = {
      id: 0,   
      numRevenus: '',
      type: '',
      etat: '',
      chambre: '',
      wc: '',
      cuisine: '',
      bureau: '',
      prix: '',
      salon: '',
      compteurElc: '',
      compteureau: '',    
      attribut1: 0,
      attribut2: '',
      attribut3: '',
      attribue4: '',
      dotationName: '',
      idDotation: 0,
      creatorName: '',
      idUserCreator: '',
      dateenreg:'',

    }

  }

  //Impression

  //Pdf
  path: string;
  public openPDF() {

    var data = document.getElementById('htmlData');
    data.style.display = "block";
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      data.style.display = "none"
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
     
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      this.path = "Unite" + this.unite.numRevenus + ".pdf"
      pdf.save(this.path); // Generated PDF

    });

  }

}
