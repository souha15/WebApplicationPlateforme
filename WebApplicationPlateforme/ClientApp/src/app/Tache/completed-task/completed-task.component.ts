import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TacheService } from '../../shared/Services/Taches/tache.service';
import { Tache } from '../../shared/Models/Taches/tache.model';
import { UserServiceService } from '../../shared/Services/User/user-service.service';
import { EvaluationService } from '../../shared/Services/Taches/evaluation.service';
import { Evaluation } from '../../shared/Models/Taches/evaluation.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.css']
})
export class CompletedTaskComponent implements OnInit {

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute,
    private TacheService: TacheService,
    private UserService: UserServiceService,
    private evaluationService: EvaluationService,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.getIdUrl();
    this.getTaskDetails();
    this.getUserConnected();

  }

  //get id in URl
  TaskId: number;
  tache: Tache = new Tache();
  getIdUrl() {
    this.routeSub = this.route.params.subscribe(params => {
      this.TaskId = params['id']
    });


  }

  // getTask
  getTaskDetails() {
    this.TacheService.GetById(this.TaskId).subscribe(res => {
      this.tache = res

    })
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  //Test Rating
  rating: number = 0;
  onSelect(event) {
    if (event.target.checked) {
      this.rating = this.rating + 1.25;

    }
    else
      this.rating = this.rating - 1.25;

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

  //Create Evaluation

  evaluation: Evaluation = new Evaluation();
  Createdevaluation: Evaluation = new Evaluation();
  date = Date.now();
  CurrentDate = new Date(this.date)

  onSubmit() {
    this.evaluation.IdTache = this.tache.id;
    this.evaluation.IdUserEvaluating = this.UserIdConnected;
    this.evaluation.rating = this.rating.toString();
    this.evaluation.NomUserEvaluated = this.tache.createur;
    this.evaluation.dateTime = this.CurrentDate;
    this.evaluation.id = this.tache.id;
    this.evaluationService.CreateEvaluation(this.evaluation).subscribe(
      (res: any) => {
        this.Createdevaluation = res
        this.toastr.success("تم تقييم المهمة بنجاح", " تقييم المهمة");},
      err => {
        this.toastr.error("وقع تقييم المهمة مسبقا", " تقييم المهمة")
      }
   )

  }
}
