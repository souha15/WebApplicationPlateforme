import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EtatDotationService } from '../../../shared/Services/Dotations/etat-dotation.service';
import { TypeDotationService } from '../../../shared/Services/Dotations/type-dotation.service';
import { AgenceImmobService } from '../../../shared/Services/Dotations/agence-immob.service';
import { ToastrService } from 'ngx-toastr';
import { DotationService } from '../../../shared/Services/Dotations/dotation.service';
import { TypeDotation } from '../../../shared/Models/Dotations/type-dotation.model';
import { EtatDotation } from '../../../shared/Models/Dotations/etat-dotation.model';
import { AgenceImmob } from '../../../shared/Models/Dotations/agence-immob.model';
import { NgForm } from '@angular/forms';
import { UserDetail } from '../../../shared/Models/User/user-detail.model';
import { UserServiceService } from '../../../shared/Services/User/user-service.service';
import { Dotation } from '../../../shared/Models/Dotations/dotation.model';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-enregistrer-dotation',
  templateUrl: './enregistrer-dotation.component.html',
  styleUrls: ['./enregistrer-dotation.component.css']
})
export class EnregistrerDotationComponent implements OnInit {

  @ViewChild('htmlData') htmlData: ElementRef;

  constructor(private etatDotation: EtatDotationService,
    private typeDotation: TypeDotationService,
    private AgenceService: AgenceImmobService,
    private dotationService: DotationService,
    private UserService: UserServiceService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.TypeList();
    this.Etatlist();
    this.AgenceList();
    this.resetForm();
    this.getUserConnected();
    this.UserList();
    
  }


  // Get User Connected

  UserIdConnected: string;
  UserNameConnected: string;
  adminisgtrationName: any;

  getUserConnected() {

    this.UserService.getUserProfileObservable().subscribe(res => {
      this.UserIdConnected = res.id;
      this.UserNameConnected = res.fullName;
    })

  }

  //Get Users List
  user: UserDetail[] = [];
  UserList() {
    this.UserService.GetUsersList().subscribe(res => {
      this.user = res; 
    })
  }
  //Get TypeDotation
  types: TypeDotation[] = [];

  TypeList() {
    this.typeDotation.Get().subscribe(res => {
      this.types = res;
     
    });
  }

  //Get etatDotation

  etats: EtatDotation[] = [];
  Etatlist() {
    this.etatDotation.Get().subscribe(res => {
      this.etats=res
    })
  }

  //Get Agence

  agence: AgenceImmob[] = [];
  AgenceList() {
    this.AgenceService.Get().subscribe(res => {
      this.agence=res
    })
  }

  dotation: Dotation = new Dotation();
  Cdotation: Dotation = new Dotation();

  isValidFormSubmitted = false;
  onSubmit(form: NgForm) {
    this.dotation.creatorName = this.UserNameConnected;
    this.dotation.idUserCreator = this.UserIdConnected;
    this.dotation.dateenreg = this.date;

    if (form.invalid) {
      this.isValidFormSubmitted = false;

    } else {

      this.isValidFormSubmitted = true

    this.dotationService.Add(this.dotation).subscribe(
      res => {
        this.Cdotation.nom = this.dotation.nom
        this.Cdotation.attribut2 = this.dotation.attribut2
        this.Cdotation.id = this.dotation.id
        this.Cdotation.adresse = this.dotation.adresse
        this.Cdotation.comptable = this.dotation.comptable
        this.Cdotation.creatorName = this.dotation.creatorName
        this.Cdotation.idUserCreator = this.dotation.idUserCreator
        this.Cdotation.idAgence = this.dotation.idAgence
        this.Cdotation.dateenreg = this.dotation.dateenreg
        this.Cdotation.compteurElec = this.dotation.compteurElec
        this.Cdotation.numCompteur = this.dotation.numCompteur
        this.Cdotation.date = this.dotation.date
        this.Cdotation.etat = this.dotation.etat
        this.Cdotation.type = this.dotation.type
        this.Cdotation.nbunite = this.dotation.nbunite
        this.Cdotation.officeImmobiler = this.dotation.officeImmobiler
        this.toastr.success("تمت الإضافة بنجاح", "نجاح");
        this.AgenceService.GetById(this.dotation.idAgence).subscribe(res => {
          this.AgencyName = res.nom
        
        })
      
        form.resetForm();
      },
      err => {
        console.log(err);
        this.toastr.warning('لم تتم الإضافة', ' فشل');
      }
    )
  }
  }

  date = new Date().toLocaleDateString();
  resetForm(form?: NgForm) {
  
    if (form != null)
      form.resetForm();
    this.dotationService.formData = {
      id: 0,
      nom: '',
      date: '',
      type: '',
      etat: '',
      adresse: '',
      nbunite: '',
      compteurElec: '',
      numCompteur: '',
      officeImmobiler: '',
      comptable: '',
      attribut1: 0,
      attribut2: '',
      attribut3: '',
      attribue4: '',
      creatorName: this.UserNameConnected,
      idUserCreator: this.UserIdConnected,
      idAgence: null,
      dateenreg: this.date,
   
    }
 
  }

  //Get Agencey Name
  AgencyName: string;
  getAgenceName() {
    this.AgenceService.GetById(this.dotation.idAgence).subscribe(res => {
      this.AgencyName = res.nom
    })
  }

  //Pdf
  path: string;
  public openPDF() {
    console.log(this.Cdotation)
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
      this.path = "Dotation" + this.dotation.id + ".pdf"
      pdf.save(this.path); // Generated PDF

    });

  }
}
