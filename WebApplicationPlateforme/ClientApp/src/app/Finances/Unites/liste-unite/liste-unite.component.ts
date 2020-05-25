import { Component, OnInit } from '@angular/core';
import { UniteService } from '../../../shared/Services/Dotations/unite.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DotationService } from '../../../shared/Services/Dotations/dotation.service';
import { EtatUniteService } from '../../../shared/Services/Dotations/etat-unite.service';
import { UserServiceService } from '../../../shared/Services/User/user-service.service';
import { TypeUniteService } from '../../../shared/Services/Dotations/type-unite.service';
import { Dotation } from '../../../shared/Models/Dotations/dotation.model';
import { TypeUnite } from '../../../shared/Models/Dotations/type-unite.model';
import { EtatUnite } from '../../../shared/Models/Dotations/etat-unite.model';
import { Unite } from '../../../shared/Models/Dotations/unite.model';

@Component({
  selector: 'app-liste-unite',
  templateUrl: './liste-unite.component.html',
  styleUrls: ['./liste-unite.component.css']
})
export class ListeUniteComponent implements OnInit {

  constructor(private uniteService: UniteService,
    private dotationService: DotationService,
    private etatService: EtatUniteService,
    private UserService: UserServiceService,
    private typeService: TypeUniteService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getUserConnected();
    this.EtatList();
    this.TypeList();
    this.DotationList();
    this.resetForm();
    this.Unitelist();
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
      this.dotations = res
    })
  }


  //Unite List


  //get dotation list

  list: Unite[] = [];

  Unitelist() {
    this.uniteService.Get().subscribe(res => {
      this.list = res
    });
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
      dateenreg: '',

    }

  }

  // Delete
  onDelete(Id) {
    if (confirm('Are you sure to delete this record ?')) {
      this.uniteService.Delete(Id)
        .subscribe(res => {
          this.Unitelist();
          this.toastr.success("تم الحذف  بنجاح", "نجاح");
        },

          err => {
            console.log(err);
            this.toastr.warning('لم يتم الحذف  ', ' فشل');

          }
        )

    }
  }


  uniteI: Unite = new Unite();
  agencename: string;
  populateForm(unite: Unite) {
    this.uniteService.formData = Object.assign({}, unite)
    this.uniteI = Object.assign({}, unite);  

  }

  editdot: Unite = new Unite();
  updateRecord(form: NgForm) {
    this.editdot = Object.assign(this.editdot, form.value);

    this.uniteService.Edit().subscribe(res => {
      this.toastr.success('تم التحديث بنجاح', 'نجاح')
    
      this.Unitelist();
    },
      err => {
        this.toastr.error('لم يتم التحديث  ', ' فشل');
      }


    )
  }

  onSubmit(form: NgForm) {
    this.updateRecord(form)
  }

}
