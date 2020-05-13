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
  filter;
  userDetails;
  constructor(private TacheService: TacheService,
    private toastr: ToastrService,
    private UserService: UserServiceService,
    public serviceupload: UploadDownloadService,
    private http: HttpClient,
    private rootUrl: PathSharedService
  ) {
    this.uploadStatuss = new EventEmitter<ProgressStatus>();}

  ngOnInit(): void {

    this.UserService.getUserProfile().subscribe(
      res => {
        this.userDetails = res;

      },
      err => {
        console.log(err);
      },
    );

    this.getUserConnected();
    this.getUsersList();
    this.getFiles();
 
  }

  // Get User Connected

  UserIdConnected: string;
  UserNameConnected: string;
  adminisgtrationName: any;

  getUserConnected() {
    
    this.UserService.getUserProfileObservable().subscribe(res => {
      this.UserIdConnected = res.id;
      this.UserNameConnected = res.fullName;
      this.adminisgtrationName = res.idAdministration;
      console.log(this.adminisgtrationName)
          
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

  isEmployeeSelected: boolean = false;
  
  affected: string;
  selectInput(event) {
    let selected = event.target.value;
    if (selected == "employee") {
      this.isEmployeeSelected = true;
      this.affected ="employee"
      this.testchamp = true;

    } else {
      this.isEmployeeSelected = false;
      this.affected = "all"
      this.testchamp = true;
    }
   
  }

  userAffectedName: string;
  selectInput2(event) {
    let Id = event.target.value;
    this.UserService.GetUserById(Id).subscribe(res => {
      this.userAffectedName = res.fullName;

    })
  }

  vider() {
    this.tacheId = null;
    if (this.serviceupload.list.length != 0) {
      this.serviceupload.list.length = 0;
    }
    this.tache = new Tache();
    console.log(this.tache)
    this.ngOnInit();
  }
  //Create Tache

  tache: Tache = new Tache();
  attachments: File[] = [];
  CreatedTache: Tache = new Tache();
  tacheId: number;
  testchamp: boolean;

  onSubmit() {

    this.tache.idUserCreator = this.UserIdConnected;
    this.tache.creatorName = this.UserNameConnected;
    this.tache.etat = "غير منجزة"
    this.tache.attribut4 = this.adminisgtrationName;
    

    this.tache.createur = this.userAffectedName;
    if (this.nomt == null) {
      this.toastr.warning("اختر اسم المهمة", 'تحذير')
      this.testchamp = false;
    } else if (this.datec == null) {
      this.toastr.warning(" اختر تاريخ بدء المهمة", 'تحذير')
      this.testchamp = false;
    } else if (this.affected == "employee" && this.userAffectedName == null) {
      
        this.toastr.warning("اختر الموظف المسند اليه المهمة", 'تحذير')
      this.testchamp = false;
    } else if (this.affected == null) {
      this.toastr.warning("اختر  المسند اليه المهمة", 'تحذير')
      this.testchamp = false;
    }
    else {
      this.testchamp = true;
       this.TacheService.CreateTache(this.tache).subscribe(
        (res: any) => {
          this.CreatedTache = res;
           this.tacheId = this.CreatedTache.id;

           this.pj.nomUser = this.tache.creatorName;
           let datef = Date.now();
           this.pj.dateTime = new Date(datef);
           this.pj.dateTime
           
           this.pj.idTache = this.tacheId;
           let path = this.rootUrl.getPath();
           this.fileslist.forEach(item => {
             this.pj.path = item;
             console.log(item)
             this.http.post(path + '/PiecesJointes', this.pj)
               .subscribe(res => {
                 this.serviceupload.refreshList();
                 this.GetFileName();
               });
           })
        

           console.log(this.tache)
           this.toastr.success("تم تسجيل المهمة بنجاح", " تسجيل المهمة");
          
        },
        err => {
          this.toastr.error("فشل تسجيل المهمة", " تسجيل المهمة")
        }

      )
      
    }

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

 
  }

  //Upload

  //Save it ToDatabase
  Idtransaction: number;
  url: any;
  file: any;
  fileslist: string[]=[];
  public upload(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.uploadStatuss.emit({ status: ProgressStatusEnum.START });
      this.serviceupload.uploadFile(this.file).subscribe(
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
      this.fileslist.push(this.file.name);
      console.log(this.fileslist)
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

  //Test Date

  datecreation: Date;
  datec: any;
 
  testdate(event) {
    this.datecreation = new Date(event.target.value);
    this.datecreation.toDateString();
    this.datec = this.datecreation.toLocaleDateString();
  }


  //test Nom
  nomt: string;
  testnom(event) {
    this.nomt = event.target.value;
    this.nomt.toString();
  }
}
