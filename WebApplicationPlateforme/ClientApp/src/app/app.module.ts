import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LoginPageComponent } from './User/login-page/login-page.component';
import { UserInfoComponent } from './User/user-info/user-info.component';
import { MainTasksComponent } from './Tache/main-tasks/main-tasks.component';
import { NewTaskComponent } from './Tache/new-task/new-task.component';
import { TasksListComponent } from './Tache/tasks-list/tasks-list.component';
import { TaskDetailsComponent } from './Tache/task-details/task-details.component';
import { EvaluatedTaskComponent } from './Tache/evaluated-task/evaluated-task.component';
import { CompletedTaskComponent } from './Tache/completed-task/completed-task.component';
import { AlertsComponent } from './alerts/alerts.component';
import { MailingComponent } from './mailing/mailing.component';
import { UserRegistrationComponent } from './User/user-registration/user-registration.component';
import { UserServiceService } from './shared/Services/User/user-service.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    SideMenuComponent,
    LoginPageComponent,
    UserInfoComponent,
    MainTasksComponent,
    NewTaskComponent,
    TasksListComponent,
    TaskDetailsComponent,
    EvaluatedTaskComponent,
    CompletedTaskComponent,
    AlertsComponent,
    MailingComponent,
    UserRegistrationComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },    
      { path: 'user-registration', component: UserRegistrationComponent },
      { path: 'side-menu', component: SideMenuComponent },
      { path: 'nav-menu', component: NavMenuComponent },
      { path: 'login-page', component: LoginPageComponent },
      { path: 'mailing', component: MailingComponent },
      { path: 'alerts', component: AlertsComponent },
      { path: 'completed-task', component: CompletedTaskComponent },
      { path: 'evaluated-task', component: EvaluatedTaskComponent },
      { path: 'task-details', component: TaskDetailsComponent },
      { path: 'tasks-list', component: TasksListComponent },
      { path: 'new-task', component: NewTaskComponent },
      { path: 'main-tasks', component: MainTasksComponent },
      { path: 'user-info', component: UserInfoComponent },

     
    ])
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
