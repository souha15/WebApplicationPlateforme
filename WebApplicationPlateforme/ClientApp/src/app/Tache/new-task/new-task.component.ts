import { Component, OnInit } from '@angular/core';
import { TacheService } from '../../shared/Services/Taches/tache.service';
import { ToastrService } from 'ngx-toastr';
import { Tache } from '../../shared/Models/Taches/tache.model';
import { UserServiceService } from '../../shared/Services/User/user-service.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  constructor(private TacheService: TacheService,
    private toastr: ToastrService,
    private UserService: UserServiceService,
    ) { }

  tache: Tache = new Tache();
  CreatedTache: Tache = new Tache();
  UserIdConnected: string ;
  ngOnInit(): void {

    this.UserIdConnected = this.getUserConnected();
    console.log(this.UserIdConnected)
  }

  // Get User Connected

  getUserConnected():string {
    this.UserService.getUserProfileObservable().subscribe(res => {
      this.UserIdConnected = res.Id;
      
     
    })
    console.log(this.UserIdConnected);
    return this.UserIdConnected;
  }
  //Create Tache
  onSubmit() {
    this.tache.CreatorName = this.getUserConnected();
    this.TacheService.CreateTache(this.tache).subscribe(
      (res: any) => {
        this.CreatedTache = res;
        this.toastr.success("", "");
      },
      err => {
        this.toastr.error(err,"")
      }

    )
  }
}
