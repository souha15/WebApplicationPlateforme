import { Component, OnInit } from '@angular/core';
import { DotationService } from '../../../shared/Services/Dotations/dotation.service';
import { ToastrService } from 'ngx-toastr';
import { Dotation } from '../../../shared/Models/Dotations/dotation.model';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../../../shared/Services/User/user-service.service';
import { AgenceImmobService } from '../../../shared/Services/Dotations/agence-immob.service';
import { TypeDotationService } from '../../../shared/Services/Dotations/type-dotation.service';
import { EtatDotationService } from '../../../shared/Services/Dotations/etat-dotation.service';
import { UserDetail } from '../../../shared/Models/User/user-detail.model';
import { TypeDotation } from '../../../shared/Models/Dotations/type-dotation.model';
import { EtatDotation } from '../../../shared/Models/Dotations/etat-dotation.model';
import { AgenceImmob } from '../../../shared/Models/Dotations/agence-immob.model';

@Component({
  selector: 'app-liste-dotation',
  templateUrl: './liste-dotation.component.html',
  styleUrls: ['./liste-dotation.component.css']
})
export class ListeDotationComponent implements OnInit {

  constructor(private dotationService: DotationService,
    private toastr: ToastrService,
    private etatDotation: EtatDotationService,
    private typeDotation: TypeDotationService,
    private AgenceService: AgenceImmobService,
   
    private UserService: UserServiceService,) { }

  ngOnInit(): void {
    this.dotationlist();
    this.resetForm();
    this.TypeList();
    this.Etatlist();
    this.AgenceList();
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
      this.etats = res
    })
  }

  //Get Agence

  agence: AgenceImmob[] = [];
  AgenceList() {
    this.AgenceService.Get().subscribe(res => {
      this.agence = res
    })
  }

  //get dotation list

  list: Dotation[] = [];

  dotationlist() {
    this.dotationService.Get().subscribe(res => {
      this.list=res
    });
  }

  //Delete Dotation
  onDelete(Id) {
    if (confirm('Are you sure to delete this record ?')) {
      this.dotationService.Delete(Id)
        .subscribe(res => {
          this.dotationlist();
          this.toastr.success("تم الحذف  بنجاح", "نجاح");
        },

          err => {
            console.log(err);
            this.toastr.warning('لم يتم الحذف  ', ' فشل');

          }
        )

    }
  }

  details: Dotation = new Dotation();
  agencename: string;
  populateForm(dotation: Dotation) {
    this.dotationService.formData = Object.assign({}, dotation)
    this.details = Object.assign({}, dotation);
    this.AgenceService.GetById(this.details.idAgence).subscribe(res => {
      this.agencename = res.nom
    })

  }

  editdot: Dotation = new Dotation();
  updateRecord(form: NgForm) {
    this.editdot = Object.assign(this.editdot, form.value);
    
    this.dotationService.Edit().subscribe(res => {
      this.toastr.success('تم التحديث بنجاح', 'نجاح')
      this.resetForm();
      this.dotationlist();
    },
      err => {
        this.toastr.error('لم يتم التحديث  ', ' فشل');
      }


    )
  }

  onSubmit(form: NgForm) {
    this.updateRecord(form)
  }

  resetForm(form?: NgForm) {

    if (form != null)
      form.resetForm();
    this.dotationService.formData = {
      id: null,
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
      creatorName: '',
      idUserCreator: '',
      idAgence: null,
      dateenreg: '',

    }

  }
}
