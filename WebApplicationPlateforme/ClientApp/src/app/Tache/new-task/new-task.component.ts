import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { TacheService } from '../../shared/Services/Taches/tache.service';
import { ToastrService } from 'ngx-toastr';
import { Tache } from '../../shared/Models/Taches/tache.model';
import { UserServiceService } from '../../shared/Services/User/user-service.service';
import { UserDetail } from '../../shared/Models/User/user-detail.model';
import { UploadDownloadService } from '../../shared/Services/Taches/upload-download.service';
import { ProgressStatus } from '../../shared/Interfaces/progress-status';
import { ProgressStatusEnum } from '../../shared/Enum/progress-status-enum.enum';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { PiecesJointes } from '../../shared/Models/Taches/pieces-jointes.model';
import { PathSharedService } from '../../shared/path-shared.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  @Input() public disabled: boolean;
  @Output() public uploadStatuss: EventEmitter<ProgressStatus>;
  @ViewChild('inputFile') inputFile: ElementRef;

  constructor(private TacheService: TacheService,
    private toastr: ToastrService,
    private UserService: UserServiceService,
    private serviceupload: UploadDownloadService,
    private http: HttpClient,
    private rootUrl: PathSharedService
  ) {
    this.uploadStatuss = new EventEmitter<ProgressStatus>();}

  ngOnInit(): void {

    this.getUserConnected();
    this.getUsersList();
    this.getFiles();
  }

  // Get User Connected

  UserIdConnected: string;
  UserNameConnected: string;

  getUserConnected() {
    
    this.UserService.getUserProfileObservable().subscribe(res => {
      this.UserIdConnected = res.id;
      this.UserNameConnected = res.fullName;
          
    })  
  }

  //Get Users List

  UsersList: UserDetail[] = [];

  getUsersList() {
    this.UserService.GetUsersList().subscribe(res => {
      this.UsersList = res
    })
  }

  // Select Event

  isEmployeeSelected: boolean;
  selectInput(event) {
    let selected = event.target.value;
    if (selected == "employee") {
      this.isEmployeeSelected = true;
    } else {
      this.isEmployeeSelected = false;
    }
  }

  userAffectedName: string;
  selectInput2(event) {
    let Id = event.target.value;
    this.UserService.GetUserById(Id).subscribe(res => {
      this.userAffectedName = res.fullName;

    })
  }
  //Create Tache

  tache: Tache = new Tache();
  CreatedTache: Tache = new Tache();
  tacheId: number;

  onSubmit() {
    this.tache.idUserCreator = this.UserIdConnected;
    this.tache.creatorName = this.UserNameConnected;
    this.tache.etat = "غير منجزة"
    this.tache.createur = this.userAffectedName;
    this.TacheService.CreateTache(this.tache).subscribe(
      (res: any) => {
        this.CreatedTache = res;
        this.tacheId = this.CreatedTache.id;
  
        this.toastr.success("تم تسجيل المهمة بنجاح", " تسجيل المهمة");
      },
      err => {
        this.toastr.error("فشل تسجيل المهمة"," تسجيل المهمة")
      }

    )
  }

  //Files

  public response: { 'dbpathsasstring': '' };
  public isCreate: boolean;
  public pj: PiecesJointes = new PiecesJointes();
  public pjs: PiecesJointes[];
  public files: string[];

  //get List of Files

  private getFiles() {
    this.serviceupload.getFiles().subscribe(
      data => {
        this.files = data

      }
    );

  }

  //Get file name for Database

  GetFileName() {
    let sa: string;
    let s: any;
    let finalres: any;
    let i: number = 0;
    let tlistnew: any[] = [];
    for (var k = 0; k < this.files.length; k++) {
      sa = <string>this.files[k]
      s = sa.toString().split('uploads\\,', sa.length - 1);
      finalres = s.toString().split('uploads\\', sa.length - 1);

      tlistnew[i] = finalres[1]
      i++;

    }

    console.log(tlistnew)
  }

  //Upload

  //Save it ToDatabase
  Idtransaction: number;
  url: any;
  public upload(event) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadStatuss.emit({ status: ProgressStatusEnum.START });
      this.serviceupload.uploadFile(file).subscribe(
        data => {
          if (data) {
            switch (data.type) {
              case HttpEventType.UploadProgress:
                this.uploadStatuss.emit({ status: ProgressStatusEnum.IN_PROGRESS, percentage: Math.round((data.loaded / data.total) * 100) });
                break;
              case HttpEventType.Response:
                this.inputFile.nativeElement.value = '';
                this.uploadStatuss.emit({ status: ProgressStatusEnum.COMPLETE });
                break;
            }
            this.getFiles();
            this.GetFileName();

          }

        },

        error => {
          this.inputFile.nativeElement.value = '';
          this.uploadStatuss.emit({ status: ProgressStatusEnum.ERROR });
        }
      );

      this.pj.nomUser = this.tache.creatorName;
      let datef = Date.now();
      this.pj.dateTime = new Date(datef);
      this.pj.dateTime
      this.pj.path = file.name;
      this.pj.idTache = this.tacheId;
      let path = this.rootUrl.getPath();

      this.http.post(path + '/PiecesJointes', this.pj)
        .subscribe(res => {
          this.serviceupload.refreshList();
        });

      this.GetFileName();
    }
  }

  //DeleteFile

  onDelete(Id) {
    if (confirm('هل أنت متأكد من حذف هذا الملف ?')) {
      this.serviceupload.deletePj(Id)
        .subscribe(res => {
          this.serviceupload.refreshList();
          this.toastr.success("تم الحذف  بنجاح", "نجاح");
        },

          err => {
            console.log(err);
            this.toastr.warning('لم يتم الحذف  ', ' فشل');

          }
        )

    }
  }
}
