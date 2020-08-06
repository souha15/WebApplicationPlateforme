import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { TbListeningService } from '../../shared/Services/Evenements/tb-listening.service';
import { TbListening } from '../../shared/Models/Evenements/tb-listening.model';
import { UsersListComponent } from '../../User/users-list/users-list.component';
import { UserServiceService } from '../../shared/Services/User/user-service.service';
import { ProgressStatus } from '../../shared/Interfaces/progress-status';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { PathSharedService } from '../../shared/path-shared.service';
import { UploadDownloadService } from '../../shared/Services/Taches/upload-download.service';
import { EvenementService } from '../../shared/Services/Evenements/evenement.service';
import { Evenement } from '../../shared/Models/Evenements/evenement.model';
import { NgForm } from '@angular/forms';
import { Participant } from '../../shared/Models/Evenements/participant.model';
import { DepenseService } from '../../shared/Services/Evenements/depense.service';
import { Depenses } from '../../shared/Models/Evenements/depenses.model';
import { ParticipantService } from '../../shared/Services/Evenements/participant.service';
import { ToastrService } from 'ngx-toastr';
import { PiecesJointesEv } from '../../shared/Models/Evenements/pieces-jointes-ev.model';
import { ProgressStatusEnum } from '../../shared/Enum/progress-status-enum.enum';
import { Media } from '../../shared/Models/Evenements/media.model';
import { MediaService } from '../../shared/Services/Evenements/media.service';

@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.css']
})
export class EventRegisterComponent implements OnInit {

  @Input() public disabled: boolean;
  @Output() public uploadStatuss: EventEmitter<ProgressStatus>;
  @ViewChild('inputFile') inputFile: ElementRef;

  constructor(private tbLService: TbListeningService,
    private UserService: UserServiceService,
    private eventService: EvenementService,
    public serviceupload: UploadDownloadService,
    public depenseService: DepenseService,
    public participantService: ParticipantService,
    private toastr: ToastrService,
    private http: HttpClient,
    private mediaService: MediaService,
    private rootUrl: PathSharedService) {
    this.uploadStatuss = new EventEmitter<ProgressStatus>();}

  ngOnInit(): void {
    this.getDataTbL();
    this.getUserConnected();
    this.participantList();
    this.depensesList();
  }


  // Get User Connected

  UserIdConnected: string;
  UserNameConnected: string;
  adminisgtrationName: any;

  getUserConnected() {

    this.UserService.getUserProfileObservable().subscribe(res => {
      this.UserIdConnected = res.id;
      this.UserNameConnected = res.fullName;

      console.log(this.adminisgtrationName)

    })

  }

  // Les Tables de listening

  beneficiaireList: TbListening[] = [];
  tacheEvList: TbListening[] = [];
  outilsList: TbListening[] = [];
  mediaList: TbListening[] = [];
  classList: TbListening[] = [];
  activityList: TbListening[] = [];

  getDataTbL() {
    this.tbLService.GetA().subscribe(res => {
      this.activityList = res
    });

    this.tbLService.GetB().subscribe(res => {
      this.beneficiaireList =res
    });

    this.tbLService.GetC().subscribe(res => {
      this.classList = res
    });

    this.tbLService.GetM().subscribe(res => {
      this.mediaList = res
    });

    this.tbLService.GetO().subscribe(res => {
      this.outilsList =res
    });

    this.tbLService.GetT().subscribe(res => {
      this.tacheEvList =res
    });

 
 }

  
  parttList: Participant[] = [];
  participantList() {
    this.participantService.List().subscribe(res => {
      this.parttList = res
    })
  }

  depensesLis: Depenses[] = [];
  depensesList() {
    this.depenseService.List().subscribe(res => {
      this.depensesLis = res
    })
  }


  par: Participant = new Participant();
  parlis: Participant[] = [];
  partest: boolean = false;
  i = 0;
  addpart() {   
    this.partest = true
    this.parlis[this.i] = this.par
    this.par = new Participant();
    this.i = this.i + 1
    
  }


  dep: Depenses = new Depenses();
  deplis: Depenses[] = [];
  deptest: boolean = false;
  j = 0;
  depadd() {
    this.deptest = true;
    this.deplis[this.j] = this.dep
    this.dep = new Depenses();
    this.j = this.j + 1
    console.log(this.deplis)
  }

  media: Media = new Media();
  medialis: Media[] = [];
  mediatest: boolean = false;
  k = 0;
  mediaadd() {
    this.mediatest = true;
    this.medialis[this.k] = this.media
    this.media = new Media();
    this.k = this.k + 1
    console.log(this.medialis)
  }

  ev: Evenement = new Evenement();
  isValidFormSubmitted: boolean = false;
  date = new Date().toLocaleDateString();
  eventId: number;
  onSubmit(form: NgForm) {
    
    if (form.invalid) {
      this.isValidFormSubmitted = false;
      this.toastr.warning("تأكد من  من صحة الحقول من فضلك")
      
    } else {
      this.isValidFormSubmitted = true;
      this.ev.dateenreg = this.date;
      this.ev.userNameCreator = this.UserNameConnected;
      this.ev.idUserCreator = this.UserIdConnected;

      this.eventService.Create(this.ev).subscribe(
        res => {
          this.eventId = res.id;

          // create participant
          if (this.partest) {
            for (let i = 0; i < this.parlis.length; i++) {
              this.par = this.parlis[i]
              console.log(this.par)
              this.par.idEvent = this.eventId;
              this.participantService.Create(this.par).subscribe(res => {

              },
                err => {
                  this.toastr.error("  فشل في تسجيل المستفيدون", "فشل")
                })
            }
          }

          //create depenses
          if (this.deptest) {

            for (let i = 0; i < this.deplis.length; i++) {
              //this.dep = new Depenses();
              this.dep = this.deplis[i]
              console.log(this.dep)
              this.dep.idEvent = this.eventId
              this.depenseService.Create(this.dep).subscribe(res => {

              },
                err => {
                  this.toastr.error("  فشل في تسجيل المصروفات", "فشل")
                })
            }


          }

          //create media


          if (this.mediatest) {

            for (let i = 0; i < this.medialis.length; i++) {
              //this.dep = new Depenses();
              this.media = this.medialis[i]
              console.log(this.media)
              this.media.idEvent = this.eventId
              this.mediaService.AddM(this.media).subscribe(res => {

              },
                err => {
                  this.toastr.error("  فشل في تسجيل وسائل الاعلام", "فشل")
                })
            }


          }
          //img

          this.pj.idEvent = this.eventId;
          this.pj.date = this.date;
          this.pj.type = 'img'
          let path = this.rootUrl.getPath();
          this.fileslist.forEach(item => {
            this.pj.path = item;
            this.http.post(path + '/PiecesJointesEvents', this.pj)
              .subscribe(res => {
                this.serviceupload.refreshListR();
                this.GetFileName();

              })
          });


          //video

          this.pj1.idEvent = this.eventId;
          this.pj1.date = this.date;
          this.pj1.type = 'vid'
          let path1 = this.rootUrl.getPath();
          this.fileslist1.forEach(item => {
            this.pj1.path = item;
            this.http.post(path1 + '/PiecesJointesEvents', this.pj1)
              .subscribe(res => {
                this.serviceupload.refreshListR();
                this.GetFileName();

              })
          })

       

          //voc


          this.pj2.idEvent = this.eventId;
          this.pj2.date = this.date;
          this.pj2.type = 'voc'
          let path2 = this.rootUrl.getPath();
          this.fileslist2.forEach(item => {
            this.pj2.path = item;
            this.http.post(path2 + '/PiecesJointesEvents', this.pj2)
              .subscribe(res => {
                this.serviceupload.refreshListR();
                this.GetFileName();

              })
          })
         

          this.toastr.success("تم التسجيل بنجاح", "نجاح")
          form.resetForm();
          this.deptest = false;
          this.partest = false;
          this.mediatest = false;
          this.deplis.length = 0;
          this.parlis.length = 0;
          this.medialis.length = 0;
      },
        err => {
          this.toastr.error("فشل في التسجيل","فشل")
        }
      )
    }
  }


  //Files


  public response: { 'dbpathsasstring': '' };
  public isCreate: boolean;
  public pj: PiecesJointesEv = new PiecesJointesEv();
  public pjs: PiecesJointesEv[];
  public pj1: PiecesJointesEv = new PiecesJointesEv();
  public pjs1: PiecesJointesEv[];
  public pj2: PiecesJointesEv = new PiecesJointesEv();
  public pjs2: PiecesJointesEv[];
  public files: string[];

  //get List of Files

  private getFiles() {
    this.serviceupload.getFiles().subscribe(
      data => {
        this.files = data

      }
    );

  }

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

  //upload 1


  url: any;
  file: any;
  fileslist: string[] = [];
  public upload1(event) {
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
      
    }
  }


  // upload 1


  url1: any;
  file1: any;
  fileslist1: string[] = [];
  public upload2(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.file1 = event.target.files[0];
      this.uploadStatuss.emit({ status: ProgressStatusEnum.START });
      this.serviceupload.uploadFile(this.file1).subscribe(
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
      this.fileslist1.push(this.file1.name);
      console.log(this.fileslist1)
    }
  }


  // upload 3

  url2: any;
  file2: any;
  fileslist2: string[] = [];
  public upload3(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.file2 = event.target.files[0];
      this.uploadStatuss.emit({ status: ProgressStatusEnum.START });
      this.serviceupload.uploadFile(this.file2).subscribe(
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
      this.fileslist2.push(this.file2.name);
      console.log(this.fileslist2)
    }
  }
}
