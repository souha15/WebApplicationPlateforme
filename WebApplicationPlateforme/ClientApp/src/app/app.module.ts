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
import { EnregistrerDotationComponent } from './Finances/Dotations/enregistrer-dotation/enregistrer-dotation.component';
import { ListeDotationComponent } from './Finances/Dotations/liste-dotation/liste-dotation.component';
import { DotationDetailsComponent } from './Finances/Dotations/dotation-details/dotation-details.component';
import { DotationEditComponent } from './Finances/Dotations/dotation-edit/dotation-edit.component';
import { UniteEditComponent } from './Finances/Unites/unite-edit/unite-edit.component';
import { UniteDetailsComponent } from './Finances/Unites/unite-details/unite-details.component';
import { EnregistrerUniteComponent } from './Finances/Unites/enregistrer-unite/enregistrer-unite.component';
import { ListeUniteComponent } from './Finances/Unites/liste-unite/liste-unite.component';
import { ListeLocataireComponent } from './Finances/Locataires/liste-locataire/liste-locataire.component';
import { EditLocataireComponent } from './Finances/Locataires/edit-locataire/edit-locataire.component';
import { LocataireDetailsComponent } from './Finances/Locataires/locataire-details/locataire-details.component';
import { RevenusDetailsComponent } from './Finances/Revenus/revenus-details/revenus-details.component';
import { RevenusListComponent } from './Finances/Revenus/revenus-list/revenus-list.component';
import { EnregistrerRevenusComponent } from './Finances/Revenus/enregistrer-revenus/enregistrer-revenus.component';
import { EditRevenusComponent } from './Finances/Revenus/edit-revenus/edit-revenus.component';
import { EnregistrerLocataireComponent } from './Finances/Locataires/enregistrer-locataire/enregistrer-locataire.component';
import { DepotRevenusComponent } from './Finances/Parametrage/depot-revenus/depot-revenus.component';
import { ServiceRevenusComponent } from './Finances/Parametrage/service-revenus/service-revenus.component';
import { TypedotationComponent } from './Finances/Parametrage/typedotation/typedotation.component';
import { EtatdotationComponent } from './Finances/Parametrage/etatdotation/etatdotation.component';
import { EtatuniteComponent } from './Finances/Parametrage/etatunite/etatunite.component';
import { TypeuniteComponent } from './Finances/Parametrage/typeunite/typeunite.component';
import { MenuFinanceComponent } from './Finances/Main/menu-finance/menu-finance.component';
import { MainFinancePageComponent } from './Finances/Main/main-finance-page/main-finance-page.component';
import { MainFarametrageFinancePageComponent } from './Finances/Parametrage/main-farametrage-finance-page/main-farametrage-finance-page.component';
import { TypeDotationService } from './shared/Services/Dotations/type-dotation.service';
import { EtatDotationService } from './shared/Services/Dotations/etat-dotation.service';
import { BureauImmobPageComponent } from './Finances/Parametrage/bureau-immob-page/bureau-immob-page.component';
import { AgenceImmobService } from './shared/Services/Dotations/agence-immob.service';
import { TypeUniteService } from './shared/Services/Dotations/type-unite.service';
import { EtatUniteService } from './shared/Services/Dotations/etat-unite.service';
import { ServiceRevenusService } from './shared/Services/Dotations/service-revenus.service';
import { UniteService } from './shared/Services/Dotations/unite.service';
import { LocataireService } from './shared/Services/Dotations/locataire.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { DepotRevenusService } from './shared/Services/Dotations/depot-revenus.service';
import { OrganismeComponent } from './AdministrativeCommunication/ParametrageCA/organisme/organisme.component';
import { ProprietaireComponent } from './AdministrativeCommunication/ParametrageCA/proprietaire/proprietaire.component';
import { EnregistrerTRRecueComponent } from './AdministrativeCommunication/Transaction/Recue/enregistrer-tr-recue/enregistrer-tr-recue.component';
import { MyListeTrComponent } from './AdministrativeCommunication/Transaction/Recue/my-liste-tr/my-liste-tr.component';
import { MyListeTrEmiseComponent } from './AdministrativeCommunication/Transaction/Emise/my-liste-tr-emise/my-liste-tr-emise.component';
import { EnregistrerTREComponent } from './AdministrativeCommunication/Transaction/Emise/enregistrer-tre/enregistrer-tre.component';
import { EnregistrerTRIComponent } from './AdministrativeCommunication/Transaction/Interne/enregistrer-tri/enregistrer-tri.component';
import { MyListeTrIComponent } from './AdministrativeCommunication/Transaction/Interne/my-liste-tr-i/my-liste-tr-i.component';
import { MyListeDecisionComponent } from './AdministrativeCommunication/Transaction/Decision/my-liste-decision/my-liste-decision.component';
import { EnregistrerDecisionComponent } from './AdministrativeCommunication/Transaction/Decision/enregistrer-decision/enregistrer-decision.component';
import { ACMenuComponent } from './AdministrativeCommunication/ParametrageCA/acmenu/acmenu.component';
import { ListeOrganismeComponent } from './AdministrativeCommunication/ParametrageCA/liste-organisme/liste-organisme.component';
import { ListeProprietaireComponent } from './AdministrativeCommunication/ParametrageCA/liste-proprietaire/liste-proprietaire.component';
import { MainPageACComponent } from './AdministrativeCommunication/Main-Menu/main-page-ac/main-page-ac.component';
import { MainPageAC2Component } from './AdministrativeCommunication/Main-Menu/main-page-ac2/main-page-ac2.component';
import { TransactionsRListComponent } from './AdministrativeCommunication/Transaction/Recue/transactions-rlist/transactions-rlist.component';
import { EnregDefRComponent } from './AdministrativeCommunication/Transaction/Recue/enreg-def-r/enreg-def-r.component';
import { EnregTempRComponent } from './AdministrativeCommunication/Transaction/Recue/enreg-temp-r/enreg-temp-r.component';
import { EnregRComponent } from './AdministrativeCommunication/Transaction/Recue/enreg-r/enreg-r.component';
import { AfftectedToMyAdminRComponent } from './AdministrativeCommunication/Transaction/Recue/afftected-to-my-admin-r/afftected-to-my-admin-r.component';
import { NgxBarcode6Module } from 'ngx-barcode6';
import { TransactionsElistComponent } from './AdministrativeCommunication/Transaction/Emise/transactions-elist/transactions-elist.component';
import { EnregEComponent } from './AdministrativeCommunication/Transaction/Emise/enreg-e/enreg-e.component';
import { AfftectedToMyAdminEComponent } from './AdministrativeCommunication/Transaction/Emise/afftected-to-my-admin-e/afftected-to-my-admin-e.component';
import { EnregTempEComponent } from './AdministrativeCommunication/Transaction/Emise/enreg-temp-e/enreg-temp-e.component';
import { EnregDefEComponent } from './AdministrativeCommunication/Transaction/Emise/enreg-def-e/enreg-def-e.component';
import { RappotEmiseComponent } from './AdministrativeCommunication/Rapport/rappot-emise/rappot-emise.component';
import { RapportInterneComponent } from './AdministrativeCommunication/Rapport/rapport-interne/rapport-interne.component';
import { RapportRecueComponent } from './AdministrativeCommunication/Rapport/rapport-recue/rapport-recue.component';
import { EnregDefIComponent } from './AdministrativeCommunication/Transaction/Interne/enreg-def-i/enreg-def-i.component';
import { EnregTempIComponent } from './AdministrativeCommunication/Transaction/Interne/enreg-temp-i/enreg-temp-i.component';
import { EnregIComponent } from './AdministrativeCommunication/Transaction/Interne/enreg-i/enreg-i.component';
import { AffectedToMyAdminIComponent } from './AdministrativeCommunication/Transaction/Interne/affected-to-my-admin-i/affected-to-my-admin-i.component';
import { BeneficiaireCComponent } from './Evenement/beneficiaire-c/beneficiaire-c.component';
import { TacheEvCComponent } from './Evenement/tache-ev-c/tache-ev-c.component';
import { OutilsCComponent } from './Evenement/outils-c/outils-c.component';
import { MediasCComponent } from './Evenement/medias-c/medias-c.component';
import { ClasseCComponent } from './Evenement/classe-c/classe-c.component';
import { TblMenuComponent } from './Evenement/tbl-menu/tbl-menu.component';
import { TblMainComponent } from './Evenement/tbl-main/tbl-main.component';
import { EventRegisterComponent } from './Evenement/event-register/event-register.component';
import { EventDetailsComponent } from './Evenement/event-details/event-details.component';
import { EventListComponent } from './Evenement/event-list/event-list.component';
import { ActivityCComponent } from './Evenement/activity-c/activity-c.component';
import { DepenseCComponent } from './Evenement/depense-c/depense-c.component';
import { DemandeCongeComponent } from './RH/Conge/demande-conge/demande-conge.component';
import { MyListCongeComponent } from './RH/Conge/my-list-conge/my-list-conge.component';
import { ValidateCongeComponent } from './RH/Conge/validate-conge/validate-conge.component';
import { SuivieCongeComponent } from './RH/Conge/suivie-conge/suivie-conge.component';
import { PermissionAddComponent } from './RH/Permission/permission-add/permission-add.component';
import { PermissionListComponent } from './RH/Permission/permission-list/permission-list.component';
import { NomEquipementComponent } from './RH/Equipement/nom-equipement/nom-equipement.component';
import { TypeEquipementComponent } from './RH/Equipement/type-equipement/type-equipement.component';
import { EquipementAddComponent } from './RH/Equipement/equipement-add/equipement-add.component';
import { EquipementListComponent } from './RH/Equipement/equipement-list/equipement-list.component';
import { RecrutementListComponent } from './RH/Recrutement/recrutement-list/recrutement-list.component';
import { RecrutementAddComponent } from './RH/Recrutement/recrutement-add/recrutement-add.component';
import { EquipementListDirComponent } from './RH/Equipement/equipement-list-dir/equipement-list-dir.component';
import { PermissionListDirComponent } from './RH/Permission/permission-list-dir/permission-list-dir.component';
import { MenurequestsComponent } from './RH/menurequests/menurequests.component';
import { NavmenurequestsComponent } from './RH/navmenurequests/navmenurequests.component';

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
    EnregistrerDotationComponent,
    ListeDotationComponent,
    DotationDetailsComponent,
    DotationEditComponent,
    UniteEditComponent,
    UniteDetailsComponent,
    EnregistrerUniteComponent,
    ListeUniteComponent,
    ListeLocataireComponent,
    EditLocataireComponent,
    LocataireDetailsComponent,
    RevenusDetailsComponent,
    RevenusListComponent,
    EnregistrerRevenusComponent,
    EditRevenusComponent,
    EnregistrerLocataireComponent,
    DepotRevenusComponent,
    ServiceRevenusComponent,
    TypedotationComponent,
    EtatdotationComponent,
    EtatuniteComponent,
    TypeuniteComponent,
    MenuFinanceComponent,
    MainFinancePageComponent,
    MainFarametrageFinancePageComponent,
    BureauImmobPageComponent,
    OrganismeComponent,
    ProprietaireComponent,
    EnregistrerTRRecueComponent,
    MyListeTrComponent,
    MyListeTrEmiseComponent,
    EnregistrerTREComponent,
    EnregistrerTRIComponent,
    MyListeTrIComponent,
    MyListeDecisionComponent,
    EnregistrerDecisionComponent,
    ACMenuComponent,
    ListeOrganismeComponent,
    ListeProprietaireComponent,
    MainPageACComponent,
    MainPageAC2Component,
    TransactionsRListComponent,
    EnregDefRComponent,
    EnregTempRComponent,
    EnregRComponent,
    AfftectedToMyAdminRComponent,
    TransactionsElistComponent,
    EnregEComponent,
    AfftectedToMyAdminEComponent,
    EnregTempEComponent,
    EnregDefEComponent,
    RappotEmiseComponent,
    RapportInterneComponent,
    RapportRecueComponent,
    EnregDefIComponent,
    EnregTempIComponent,
    EnregIComponent,
    AffectedToMyAdminIComponent,
    BeneficiaireCComponent,
    TacheEvCComponent,
    OutilsCComponent,
    MediasCComponent,
    ClasseCComponent,
    TblMenuComponent,
    TblMainComponent,
    EventRegisterComponent,
    EventDetailsComponent,
    EventListComponent,
    ActivityCComponent,
    DepenseCComponent,
    DemandeCongeComponent,
    MyListCongeComponent,
    ValidateCongeComponent,
    SuivieCongeComponent,
    PermissionAddComponent,
    PermissionListComponent,
    NomEquipementComponent,
    TypeEquipementComponent,
    EquipementAddComponent,
    EquipementListComponent,
    RecrutementListComponent,
    RecrutementAddComponent,
    EquipementListDirComponent,
    PermissionListDirComponent,
    MenurequestsComponent,
    NavmenurequestsComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxBarcode6Module,
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
      { path: 'users-list', component: UsersListComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },
      { path: 'administration-list', component: AdministrationListComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }},
      { path: 'new-administration', component: NewAdministrationComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }},
      { path: 'new-etablissement', component: NewEtablissementComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }},
      { path: 'etablissement-list', component: EtablissementListComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }},
      { path: 'user-updating', component: UserUpdatingComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }},
      { path: 'user-updating/:id', component: UserUpdatingComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }},
      { path: 'forbidden-page', component: ForbiddenPageComponent },

      //Finanace Project

      { path: 'liste-dotation', component: ListeDotationComponent, canActivate: [AuthGuard]  },
      { path: 'dotation-details', component: DotationDetailsComponent, canActivate: [AuthGuard]  },
      { path: 'dotation-edit', component: DotationEditComponent, canActivate: [AuthGuard]    },
      { path: 'unite-edit', component: UniteEditComponent, canActivate: [AuthGuard]  },
      { path: 'unite-details', component: UniteDetailsComponent, canActivate: [AuthGuard]  },
      { path: 'enregistrer-unite', component: EnregistrerUniteComponent, canActivate: [AuthGuard]   },
      { path: 'liste-unite', component: ListeUniteComponent, canActivate: [AuthGuard]  },
      { path: 'liste-locataire', component: ListeLocataireComponent, canActivate: [AuthGuard]  },
      { path: 'edit-locataire', component: EditLocataireComponent, canActivate: [AuthGuard]  },
      { path: 'locataire-details', component: LocataireDetailsComponent, canActivate: [AuthGuard]  },
      { path: 'revenus-details', component: RevenusDetailsComponent, canActivate: [AuthGuard]   },
      { path: 'revenus-list', component: RevenusListComponent, canActivate: [AuthGuard]  },
      { path: 'enregistrer-revenus', component: EnregistrerRevenusComponent, canActivate: [AuthGuard]  },
      { path: 'enregistrer-revenus/:id', component: EnregistrerRevenusComponent, canActivate: [AuthGuard] },
      { path: 'edit-revenus', component: EditRevenusComponent, canActivate: [AuthGuard]  },
      { path: 'enregistrer-locataire', component: EnregistrerLocataireComponent, canActivate: [AuthGuard]  },
      { path: 'depot-revenus', component: DepotRevenusComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }  },
      { path: 'service-revenus', component: ServiceRevenusComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }  },
      { path: 'typedotation', component: TypedotationComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },
      { path: 'etatdotation', component: EtatdotationComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }  },
      { path: 'etatunite', component: EtatuniteComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }  },
      { path: 'enregistrer-dotation', component: EnregistrerDotationComponent, canActivate: [AuthGuard]  },
      { path: 'typeunite', component: TypeuniteComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },
      { path: 'menu-finance', component: MenuFinanceComponent, canActivate: [AuthGuard]  },
      { path: 'main-finance-page', component: MainFinancePageComponent, canActivate: [AuthGuard]  },
      { path: 'main-farametrage-finance-page', component: MainFarametrageFinancePageComponent, canActivate: [AuthGuard]  },
      { path: 'bureau-immob-page', component: BureauImmobPageComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] }  },


      //Communication Administrative
      { path: 'organisme', component: OrganismeComponent, canActivate: [AuthGuard]  },
      { path: 'proprietaire', component: ProprietaireComponent, canActivate: [AuthGuard]  },
      { path: 'enregistrer-tr-recue', component: EnregistrerTRRecueComponent, canActivate: [AuthGuard]  },
      { path: 'my-liste-tr', component: MyListeTrComponent, canActivate: [AuthGuard]  },
      { path: 'my-liste-tr-emise', component: MyListeTrEmiseComponent, canActivate: [AuthGuard]  },
      { path: 'enregistrer-tre', component: EnregistrerTREComponent, canActivate: [AuthGuard]  },
      { path: 'enregistrer-tri', component: EnregistrerTRIComponent, canActivate: [AuthGuard]  },
      { path: 'my-liste-tr-i', component: MyListeTrIComponent, canActivate: [AuthGuard]  },
      { path: 'my-liste-decision', component: MyListeDecisionComponent, canActivate: [AuthGuard]  },
      { path: 'acmenu', component: ACMenuComponent, canActivate: [AuthGuard]  },
      { path: 'enregistrer-decision', component: EnregistrerDecisionComponent, canActivate: [AuthGuard]  },
      { path: 'liste-organisme', component: ListeOrganismeComponent, canActivate: [AuthGuard]  },
      { path: 'liste-proprietaire', component: ListeProprietaireComponent, canActivate: [AuthGuard] },
      { path: 'main-page-ac', component: MainPageACComponent, canActivate: [AuthGuard] },
      { path: 'main-page-ac2', component: MainPageAC2Component, canActivate: [AuthGuard] },
      { path: 'transactions-rlist', component: TransactionsRListComponent, canActivate: [AuthGuard] },
      { path: 'enreg-def-r' , component: EnregDefRComponent, canActivate: [AuthGuard] },
      { path:'enreg-temp-r' , component: EnregTempRComponent, canActivate: [AuthGuard] },
      { path:'enreg-r' , component: EnregRComponent, canActivate: [AuthGuard] },
      { path: 'afftected-to-my-admin-r', component: AfftectedToMyAdminRComponent, canActivate: [AuthGuard] },

      { path: 'transactions-elist', component: TransactionsElistComponent , canActivate: [AuthGuard] },
      { path: 'enreg-e', component: EnregEComponent , canActivate: [AuthGuard] },
      { path: 'afftected-to-my-admin-e', component: AfftectedToMyAdminEComponent , canActivate: [AuthGuard] },
      { path: 'enreg-temp-e', component: EnregTempEComponent , canActivate: [AuthGuard] },
      { path: 'enreg-def-e', component: EnregDefEComponent, canActivate: [AuthGuard] },
      { path: 'rappot-emise', component: RappotEmiseComponent, canActivate: [AuthGuard] },
      { path: 'rapport-interne', component: RapportInterneComponent, canActivate: [AuthGuard] },
      { path: 'rapport-recue', component: RapportRecueComponent, canActivate: [AuthGuard] },

      //{ path: 'user-updating/:id', component: UserUpdatingComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMINISTRATEUR'] } },

    { path: 'enreg-def-i', component: EnregDefIComponent, canActivate: [AuthGuard] },
    { path: 'enreg-temp-i', component: EnregTempIComponent, canActivate: [AuthGuard] },
    { path: 'enreg-i', component: EnregIComponent, canActivate: [AuthGuard] },
    { path: 'affected-to-my-admin-i', component: AffectedToMyAdminIComponent, canActivate: [AuthGuard] },


    //Evenement

  { path: 'beneficiaire-c', component: BeneficiaireCComponent, canActivate: [AuthGuard] },

  { path: 'tache-ev-c', component: TacheEvCComponent, canActivate: [AuthGuard] },

  { path: 'outils-c', component: OutilsCComponent, canActivate: [AuthGuard] },

  { path: 'medias-c', component: MediasCComponent, canActivate: [AuthGuard] },

  { path: 'classe-c', component: ClasseCComponent, canActivate: [AuthGuard] },

  { path: 'tbl-menu', component: TblMenuComponent, canActivate: [AuthGuard] },

  { path: 'tbl-main', component: TblMainComponent, canActivate: [AuthGuard] },

  { path: 'event-register', component: EventRegisterComponent, canActivate: [AuthGuard] },

      { path: 'event-details', component: EventDetailsComponent, canActivate: [AuthGuard] },

      { path: 'event-details/:id', component: EventDetailsComponent, canActivate: [AuthGuard] },

      { path: 'event-list', component: EventListComponent, canActivate: [AuthGuard] },

      { path: 'medias-c/:id', component: MediasCComponent, canActivate: [AuthGuard] },

      { path: 'activity-c', component: ActivityCComponent, canActivate: [AuthGuard] },

      { path: 'depense-c', component: DepenseCComponent, canActivate: [AuthGuard] },

      //Ressources Humaines

      { path: 'demande-conge', component: DemandeCongeComponent, canActivate: [AuthGuard] },

      { path: 'my-list-conge', component: MyListCongeComponent, canActivate: [AuthGuard] },

      { path: 'validate-conge', component: ValidateCongeComponent, canActivate: [AuthGuard] },

      { path: 'suivie-conge', component: SuivieCongeComponent, canActivate: [AuthGuard] },


      { path: 'permission-add', component: PermissionAddComponent, canActivate: [AuthGuard] },

      { path: 'permission-list', component: PermissionListComponent, canActivate: [AuthGuard] },

      { path: 'nom-equipement', component: NomEquipementComponent, canActivate: [AuthGuard] },

      { path: 'type-equipement', component: TypeEquipementComponent, canActivate: [AuthGuard] },

      { path: 'equipement-add', component: EquipementAddComponent, canActivate: [AuthGuard] },

      { path: 'equipement-list', component: EquipementListComponent, canActivate: [AuthGuard] },

      { path: 'recrutement-list', component: RecrutementListComponent, canActivate: [AuthGuard] },

      { path: 'recrutement-add', component: RecrutementAddComponent, canActivate: [AuthGuard] },
 
      { path: 'equipement-list-dir', component: EquipementListDirComponent, canActivate: [AuthGuard] },

      { path: 'permission-list-dir', component: PermissionListDirComponent, canActivate: [AuthGuard] },

      { path: 'menurequests', component: MenurequestsComponent, canActivate: [AuthGuard] },
      { path: 'navmenurequests', component: NavmenurequestsComponent, canActivate: [AuthGuard] },



     
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
  },
    EvaluationService,
    PrivilegesService,
    CommentaireService,
    EtablissementService,
    AdministrationService,
    TypeDotationService,
    EtatDotationService,
    AgenceImmobService,
    TypeUniteService,
    EtatUniteService,
    ServiceRevenusService,
    UniteService,
    LocataireService,
    DepotRevenusService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
