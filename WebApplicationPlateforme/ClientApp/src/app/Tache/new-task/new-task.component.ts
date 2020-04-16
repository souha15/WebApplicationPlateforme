import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { TacheService } from '../../shared/Services/Taches/tache.service';
import { ToastrService } from 'ngx-toastr';
import { Tache } from '../../shared/Models/Taches/tache.model';
import { UserServiceService } from '../../shared/Services/User/user-service.service';
import { UserDetail } from '../../shared/Models/User/user-detail.model';
import { UploadDownloadService } from '../../shared/Services/Taches/upload-download.service';
import { ProgressStatus } from '../../shared/Interfaces/progress-status';
import { ProgressStatusEnum } from '../../shared/Enum/progress-status-enum.enum';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  @Input() public disabled: boolean;
  @Output() public uploadStatus: EventEmitter<ProgressStatus>;
  @ViewChild('inputFile') inputFile: ElementRef;

  constructor(private TacheService: TacheService,
    private toastr: ToastrService,
    private UserService: UserServiceService,
    private service: UploadDownloadService
  ) {
    this.uploadStatus = new EventEmitter<ProgressStatus>();}

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

  //Upload
  public upload(event) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadStatus.emit({ status: ProgressStatusEnum.START });
      this.service.uploadFile(file).subscribe(
        data => {
          if (data) {
            switch (data.type) {
              case HttpEventType.UploadProgress:
                this.uploadStatus.emit({ status: ProgressStatusEnum.IN_PROGRESS, percentage: Math.round((data.loaded / data.total) * 100) });
                break;
              case HttpEventType.Response:
                this.inputFile.nativeElement.value = '';
                this.uploadStatus.emit({ status: ProgressStatusEnum.COMPLETE });
                break;
            }
          }
        },
        error => {
          this.inputFile.nativeElement.value = '';
          this.uploadStatus.emit({ status: ProgressStatusEnum.ERROR });
        }
      );
    }
  }
  //list files
  public files: string[];
  public fileInDownload: string;
  public percentage: number;
  public showProgress: boolean;
  public showDownloadError: boolean;
  public showUploadError: boolean;
  private getFiles() {
    this.service.getFiles().subscribe(
      data => {
        this.files = data;
      }
    );
  }

  public uploadStatuss(event: ProgressStatus) {
    switch (event.status) {
      case ProgressStatusEnum.START:
        this.showUploadError = false;
        break;
      case ProgressStatusEnum.IN_PROGRESS:
        this.showProgress = true;
        this.percentage = event.percentage;
        break;
      case ProgressStatusEnum.COMPLETE:
        this.showProgress = false;
        this.getFiles();
        break;
      case ProgressStatusEnum.ERROR:
        this.showProgress = false;
        this.showUploadError = true;
        break;
    }
  }
}
