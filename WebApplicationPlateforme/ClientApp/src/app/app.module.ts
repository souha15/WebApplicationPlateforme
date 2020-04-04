import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
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


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
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

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
