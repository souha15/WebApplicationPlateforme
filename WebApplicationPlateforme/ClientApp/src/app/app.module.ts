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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './shared/Services/User/auth/auth.guard';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { TasksListReceivedComponent } from './Tache/tasks-list-received/tasks-list-received.component';
import { TasksListDoneComponent } from './Tache/tasks-list-done/tasks-list-done.component';
import { TasksListDelayedComponent } from './Tache/tasks-list-delayed/tasks-list-delayed.component';
import { TasksListCreatedComponent } from './Tache/tasks-list-created/tasks-list-created.component';
import { EvaluationService } from './shared/Services/Taches/evaluation.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersListComponent } from './User/users-list/users-list.component';
import { PrivilegesService } from './shared/Services/User/privileges.service';
import { CommentaireService } from './shared/Services/Taches/commentaire.service';
import { TasksReportsComponent } from './Tache/tasks-reports/tasks-reports.component';
import { TasksReportsReceivedComponent } from './Tache/tasks-reports-received/tasks-reports-received.component';
import { AdministrationListComponent } from './Administration/administration-list/administration-list.component';
import { NewAdministrationComponent } from './Administration/new-administration/new-administration.component';
import { NewEtablissementComponent } from './Etablissement/new-etablissement/new-etablissement.component';
import { EtablissementListComponent } from './Etablissement/etablissement-list/etablissement-list.component';
import { UserUpdatingComponent } from './User/user-updating/user-updating.component';
import { ForbiddenPageComponent } from './forbidden-page/forbidden-page.component';
import { AuthInterceptor } from './shared/Services/User/auth/auth.interceptor';
import { EtablissementService } from './shared/Services/Etablissement/etablissement.service';
import { AdministrationService } from './shared/Services/Administration/administration.service';
import { TasksUpMenuComponent } from './Tache/tasks-up-menu/tasks-up-menu.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserChangePaswordComponent } from './User/user-change-pasword/user-change-pasword.component';


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
    TasksListReceivedComponent,
    TasksListDoneComponent,
    TasksListDelayedComponent,
    TasksListCreatedComponent,
    UsersListComponent,
    TasksReportsComponent,
    TasksReportsReceivedComponent,
    AdministrationListComponent,
    NewAdministrationComponent,
    NewEtablissementComponent,
    EtablissementListComponent,
    UserUpdatingComponent,
    ForbiddenPageComponent,
    TasksUpMenuComponent,
    UserRegisterComponent,
    UserChangePaswordComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    NgbModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      //{ path: '', redirectTo: '/User/login-page', pathMatch:'full' },
      { path: '', component: LoginPageComponent, pathMatch: 'full' },
     // { path: '', component: UserRegisterComponent, pathMatch: 'full' },
      { path: 'user-register', component: UserRegisterComponent },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'user-change-pasword', component: UserChangePaswordComponent, canActivate: [AuthGuard] },
      { path: 'tasks-reports', component: TasksReportsComponent, canActivate: [AuthGuard] },
      { path: 'tasks-reports-received', component: TasksReportsReceivedComponent, canActivate: [AuthGuard] },
      { path: 'tasks-list-created', component: TasksListCreatedComponent, canActivate: [AuthGuard] },
      { path: 'tasks-list-received', component: TasksListReceivedComponent, canActivate: [AuthGuard] },
      { path: 'tasks-list-done', component: TasksListDoneComponent, canActivate: [AuthGuard] },
      { path: 'tasks-list-delayed', component: TasksListDelayedComponent, canActivate: [AuthGuard] },
      { path: 'user-registration', component: UserRegistrationComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },
      { path: 'side-menu', component: SideMenuComponent, canActivate: [AuthGuard] },
      { path: 'nav-menu', component: NavMenuComponent, canActivate: [AuthGuard] },
      { path: 'mailing', component: MailingComponent, canActivate: [AuthGuard] },
      { path: 'alerts', component: AlertsComponent, canActivate: [AuthGuard] },
      { path: 'completed-task', component: CompletedTaskComponent, canActivate: [AuthGuard] },
      { path: 'completed-task/:id', component: CompletedTaskComponent, canActivate: [AuthGuard] },
      { path: 'evaluated-task', component: EvaluatedTaskComponent, canActivate: [AuthGuard] },
      { path: 'evaluated-task/:id', component: EvaluatedTaskComponent, canActivate: [AuthGuard] },
      { path: 'task-details/:id', component: TaskDetailsComponent, canActivate: [AuthGuard] },
      { path: 'task-details', component: TaskDetailsComponent, canActivate: [AuthGuard] },
      { path: 'tasks-list', component: TasksListComponent, canActivate: [AuthGuard] },
      { path: 'new-task', component: NewTaskComponent, canActivate: [AuthGuard] },
      { path: 'main-tasks', component: MainTasksComponent, canActivate: [AuthGuard] },
      { path: 'user-info', component: UserInfoComponent, canActivate: [AuthGuard] },
      { path: 'users-list', component: UsersListComponent, canActivate: [AuthGuard]},
      { path: 'administration-list', component: AdministrationListComponent, canActivate: [AuthGuard]},
      { path: 'new-administration', component: NewAdministrationComponent, canActivate: [AuthGuard]},
      { path: 'new-etablissement', component: NewEtablissementComponent, canActivate: [AuthGuard]},
      { path: 'etablissement-list', component: EtablissementListComponent, canActivate: [AuthGuard]},
      { path: 'user-updating', component: UserUpdatingComponent, canActivate: [AuthGuard]},
      { path: 'user-updating/:id', component: UserUpdatingComponent, canActivate: [AuthGuard]},
      { path: 'forbidden-page', component: ForbiddenPageComponent },
      { path: 'tasks-up-menu', component: TasksUpMenuComponent  },
      //{ path: 'user-updating/:id', component: UserUpdatingComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },
   

     
    ])
  ],/*,  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  } ,*/
  providers: [UserServiceService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, EvaluationService, PrivilegesService, CommentaireService, EtablissementService, AdministrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
