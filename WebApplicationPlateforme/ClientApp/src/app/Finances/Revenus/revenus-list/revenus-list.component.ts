import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

import { LocationService } from '../../../shared/Services/Dotations/location.service';
import { ToastrService } from 'ngx-toastr';
import { LocataireService } from '../../../shared/Services/Dotations/locataire.service';
import { RevenusService } from '../../../shared/Services/Dotations/revenus.service';
import { Revenus } from '../../../shared/Models/Dotations/revenus.model';
import { NgForm } from '@angular/forms';
import { LesServicesService } from '../../../shared/Services/Dotations/les-services.service';
import { LesServices } from '../../../shared/Models/Dotations/les-services.model';
import { ProgressStatus } from '../../../shared/Interfaces/progress-status';
import { UploadDownloadService } from '../../../shared/Services/Taches/upload-download.service';
import { PiecesJointesRevenus } from '../../../shared/Models/Dotations/pieces-jointes-revenus.model';
import { ProgressStatusEnum } from '../../../shared/Enum/progress-status-enum.enum';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { PathSharedService } from '../../../shared/path-shared.service';
import { DepotRevenusService } from '../../../shared/Services/Dotations/depot-revenus.service';
import { DepotRevenus } from '../../../shared/Models/Dotations/depot-revenus.model';

@Component({
  selector: 'app-revenus-list',
  templateUrl: './revenus-list.component.html',
  styleUrls: ['./revenus-list.component.css']
})
export class RevenusListComponent implements OnInit {

  @Input() public disabled: boolean;
  @Input() public fileName: string;
  @Output() public downloadStatus: EventEmitter<ProgressStatus>;

  constructor(private LocationService: LocationService,
    private toastr: ToastrService,
    private locataireService: LocataireService,
    private revenusService: RevenusService,
    private lesServicesServices: LesServicesService,
    public serviceupload: UploadDownloadService,
    private depotService: DepotRevenusService,
    private rootUrl: PathSharedService,
    private http: HttpClient, ) { this.downloadStatus = new EventEmitter<ProgressStatus>(); }

  ngOnInit(): void {
    this.RevenusList();
    this.getAllPj();
    this.resetForm();
    this.depotRevenusList();
  }


  // Depot Revenus List
  depot: DepotRevenus[] = [];
  depotRevenusList() {
    this.depotService.Get().subscribe(res => {
      this.depot = res
    })
  }

  //list Revenus

  list: Revenus[] = [];
  RevenusList() {
    this.revenusService.Get().subscribe(res => {
      this.list=res
    })
  }

  //on Delete

  onDelete(Id) {
    if (confirm('Are you sure to delete this record ?')) {
      this.revenusService.Delete(Id)
        .subscribe(res => {
          this.RevenusList();
          this.toastr.success("تم الحذف  بنجاح", "نجاح");
        },

          err => {
            console.log(err);
            this.toastr.warning('لم يتم الحذف  ', ' فشل');

          }
        )

    }
  }

  listS: LesServices[] = [];
  filtredlistS: LesServices[] = [];
  listPj: PiecesJointesRevenus[] = [];
  listPjFiltred: PiecesJointesRevenus[] = [];
  listPjFiltredS: PiecesJointesRevenus[] = [];
  listPjFiltredK: PiecesJointesRevenus[] = [];
  listPjFiltredI: PiecesJointesRevenus[] = [];
  details: Revenus = new Revenus();

  populateForm(locataire: Revenus) {
    this.revenusService.formData = Object.assign({}, locataire)
    this.details = Object.assign({}, locataire);
    this.serviceupload.SearchR().subscribe(res => {
      this.listPj = res
      this.details = Object.assign({}, locataire);
      this.listPjFiltred = this.listPj.filter(item => item.idrevenus == this.details.id)
      this.listPjFiltredI = this.listPjFiltred.filter(item => item.type == 'الايداع')
      this.listPjFiltredS = this.listPjFiltred.filter(item => item.type == 'السندات')
      this.listPjFiltredK = this.listPjFiltred.filter(item => item.type == 'الكشف')
    })

    this.lesServicesServices.Get().subscribe(res => {
      this.listS = res

      this.filtredlistS = this.listS.filter(item => item.idRevenus == this.details.id)
 
    })

  }

  //updateRecord


  editloc: Revenus = new Revenus();
  updateRecord(form: NgForm) {
    this.editloc = Object.assign(this.editloc, form.value);

    this.revenusService.Edit().subscribe(res => {
      this.toastr.success('تم التحديث بنجاح', 'نجاح')
      this.RevenusList();
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
    this.revenusService.formData = {
      id: null,
      idlocation: 0,
      idunite: 0,
      numRevenusUnite: '',
      iddotation: 0,
      nomDotation: '',
      idLocataire: 0,
      nomLocataire: '',
      prixLocation: '',
      prixTot: '',
      mois: '',
      infoDepot: '',
      dateTemps: '',
      deposant: '',
      prixTotale: '',
      restePrixTotale: '',
      prixServices: '',
      restePrixService: '',
      prixTotaleLocation: '',
      restePrixTotaleLocation: '',
      attribut1: 0,
      attribut2: '',
      attribut3: '',
      attribue4: '',
      creatorName: '',
      dateenreg: '',
      idUserCreator: '',
    }

  }


  //Files

  getAllPj() {
    this.serviceupload.SearchR().subscribe(res => {
      this.listPj = res
      this.listPjFiltred = this.listPj.filter(item => item.idrevenus == this.details.id)
    
    })

  }

  //Download

  public download(filepath) {
    this.downloadStatus.emit({ status: ProgressStatusEnum.START });
    this.serviceupload.downloadFile(filepath).subscribe(
      data => {
        switch (data.type) {
          case HttpEventType.DownloadProgress:
            this.downloadStatus.emit({ status: ProgressStatusEnum.IN_PROGRESS, percentage: Math.round((data.loaded / data.total) * 100) });
            break;
          case HttpEventType.Response:
            this.downloadStatus.emit({ status: ProgressStatusEnum.COMPLETE });
            const downloadedFile = new Blob([data.body], { type: data.body.type });
            const a = document.createElement('a');
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            a.download = filepath;
            a.href = URL.createObjectURL(downloadedFile);
            a.target = '_blank';
            a.click();
            document.body.removeChild(a);
            break;
        }
      },
      error => {
        this.downloadStatus.emit({ status: ProgressStatusEnum.ERROR });
      }
    );
  }
}
