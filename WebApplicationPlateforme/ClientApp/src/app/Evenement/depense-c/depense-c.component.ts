import { Component, OnInit } from '@angular/core';
import { DepenseService } from '../../shared/Services/Evenements/depense.service';
import { ToastrService } from 'ngx-toastr';
import { Depenses } from '../../shared/Models/Evenements/depenses.model';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-depense-c',
  templateUrl: './depense-c.component.html',
  styleUrls: ['./depense-c.component.css']
})
export class DepenseCComponent implements OnInit {


  constructor(private tblService: DepenseService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.ShowDotations();
    this.resetForm();
  }

  // Type Dotation List

  private _allDotations: Observable<Depenses[]>;
  public get allDotation(): Observable<Depenses[]> {
    return this._allDotations;
  }

  public set allDotation(value: Observable<Depenses[]>) {
    this._allDotations = value;


  }

  ShowDotations() {
    this.allDotation = this.tblService.List();
  }

  //Delete Dotation
  onDelete(Id) {
    if (confirm('Are you sure to delete this record ?')) {
      this.tblService.Delete(Id)
        .subscribe(res => {
          this.ShowDotations();
          this.resetForm();
          this.toastr.success("تم الحذف  بنجاح", "نجاح");
        },

          err => {
            console.log(err);
            this.toastr.warning('لم يتم الحذف  ', ' فشل');

          }
        )

    }
  }

  //Reset Form
  resetForm(form?: NgForm) {

    if (form != null)
      form.resetForm();
    this.tblService.formData = {
      id: 0,     
      type: '',
      prix: '',
      nombre: '',
      attribut1: 0,
      attribut2: '', 
      attribut3: '',
      attribut4: 0,
      idEvent:null,

    }
  }

  //PopulateForm

  populateForm(dotation: Depenses) {
    this.tblService.formData = Object.assign({}, dotation);

  }

  //Edit

  updateRecord(form: NgForm) {
    this.tblService.Edit().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success("تم التحديث  بنجاح", "نجاح");
        this.ShowDotations();

      },
      err => {
        console.log(err);
        this.toastr.warning('لم يتم التحديث ', ' فشل');

      }
    )
  }

  // Insert

  dotation: Depenses = new Depenses();

  insertRecord(form: NgForm) {
    this.tblService.Post().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success("تمت الإضافة بنجاح", "نجاح");
        this.ShowDotations();
      },
      err => {
        console.log(err);
        this.toastr.warning('لم تتم الإضافة', ' فشل');
      }
    )
  }

  // Add and Update
  onSubmit(form: NgForm) {
    if (this.tblService.formData.id == 0)
      this.insertRecord(form);
    else  //update
      this.updateRecord(form);
  }
}


