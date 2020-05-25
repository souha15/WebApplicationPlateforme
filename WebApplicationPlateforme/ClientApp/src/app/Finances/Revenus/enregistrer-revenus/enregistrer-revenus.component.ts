import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '../../../shared/Models/Dotations/location.model';
import { LocationService } from '../../../shared/Services/Dotations/location.service';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../../../shared/Services/User/user-service.service';
import { UniteService } from '../../../shared/Services/Dotations/unite.service';
import { DotationService } from '../../../shared/Services/Dotations/dotation.service';
import { LocataireService } from '../../../shared/Services/Dotations/locataire.service';
import { ServiceRevenusService } from '../../../shared/Services/Dotations/service-revenus.service';
import { RevenusService } from '../../../shared/Services/Dotations/revenus.service';
import { ServicesRevenus } from '../../../shared/Models/Dotations/services-revenus.model';
import { Revenus } from '../../../shared/Models/Dotations/revenus.model';
import { NgForm } from '@angular/forms';
import { LesServicesService } from '../../../shared/Services/Dotations/les-services.service';
import { LesServices } from '../../../shared/Models/Dotations/les-services.model';

@Component({
  selector: 'app-enregistrer-revenus',
  templateUrl: './enregistrer-revenus.component.html',
  styleUrls: ['./enregistrer-revenus.component.css']
})
export class EnregistrerRevenusComponent implements OnInit {

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute,
    private LocationService: LocationService,
    private toastr: ToastrService,
    private UserService: UserServiceService,
    private uniteService: UniteService,
    private dotationService: DotationService,
    private locataireService: LocataireService,
    private serviceRevenusService: ServiceRevenusService,
    private revenusService: RevenusService,
    private lesServicesServices: LesServicesService
  ) { }

  ngOnInit(): void {
    this.getIdUrl();
    this.getLocationDetails();
    this.GetRevenusServicesList();
    this.getUserConnected();
  }


  LocationId: number;
  tache: Location = new Location();
  getIdUrl() {
    this.routeSub = this.route.params.subscribe(params => {
      this.LocationId = params['id']
      console.log(this.LocationId)
    });


  }


  // Get User Connected

  UserIdConnected: string;
  UserNameConnected: string;
  adminisgtrationName: any;

  getUserConnected() {

    this.UserService.getUserProfileObservable().subscribe(res => {
      this.UserIdConnected = res.id;
      this.UserNameConnected = res.fullName;
    })
  }

  //get Location Data

  LocationDetails: Location = new Location();
  uniteId: number;
  unitenumRevenus: string;
  dotationId: number;
  dotationName: string;
  locataireId: number;
  locataireName: string;
  prixunite: string;
  prixlocation: string;

  getLocationDetails() {
    this.LocationService.GetById(+this.LocationId).subscribe(res => {
      this.LocationDetails = res;
      this.uniteId = this.LocationDetails.idunite;
      this.dotationId = this.LocationDetails.iddotation;
      this.locataireId = this.LocationDetails.idlocataire;
      this.prixlocation = this.LocationDetails.prixlocationmois;
 
      //get Dotation name

      this.dotationService.GetById(this.dotationId).subscribe(res => {
        this.dotationName = res.nom
      })


      //get Unite numRevenus

      this.uniteService.GetById(this.uniteId).subscribe(res => {
        this.unitenumRevenus = res.numRevenus;
        this.prixunite = res.prix;
      })

      //get locataire Name

      this.locataireService.GetById(this.locataireId).subscribe(res => {
        this.locataireName = res.nom
      })
    })
  }

  // Get Services list
  items: ServicesRevenus[] = [];
  selected: ServicesRevenus[]=[];

  GetRevenusServicesList() {
    this.serviceRevenusService.Get().subscribe(res => {
      this.items = res
      
    })
  }

  testservice: boolean = false;
  getValues(event) {
   // this.selected = event.target.value;
    if (event != null) {
      this.testservice = true;
      this.selected = event;
      this.selected.forEach(item => {
        console.log(item.nom)
      })
    }    
    
  }


  //onSubmit
  revenus: Revenus = new Revenus();
  Createdrevenus: Revenus = new Revenus();
  MesServices: LesServices = new LesServices();
  MesServices2: LesServices = new LesServices();

  isValidFormSubmitted = false;
  date = new Date().toLocaleDateString();
  revenusId : number;
  onSubmit(form: NgForm) {
    this.revenus.creatorName = this.UserNameConnected;
    this.revenus.idUserCreator = this.UserIdConnected;
    this.revenus.dateenreg = this.date;
    this.revenus.iddotation = this.dotationId
    this.revenus.idLocataire = this.locataireId;
    this.revenus.idlocation = this.LocationId;
    this.revenus.idunite = this.uniteId;
    this.revenus.nomDotation = this.dotationName;
    this.revenus.nomLocataire = this.locataireName;
    this.revenus.numRevenusUnite = this.unitenumRevenus;
    this.revenus.prixLocation = this.prixlocation;

    if (form.invalid) {
      this.isValidFormSubmitted = false;

    } else {
      this.isValidFormSubmitted = true
      this.revenusService.Add(this.revenus).subscribe(res => {
        this.Createdrevenus = res
        this.revenusId = res.id
        this.toastr.success("تمت الإضافة بنجاح", "نجاح");

        this.selected.forEach(item => {
          this.MesServices.date = this.date;
          this.MesServices.idRevenus = this.revenusId;
          this.MesServices.nomServices = item.nom;
          this.MesServices.prixService = item.prix;
          this.lesServicesServices.Add(this.MesServices).subscribe(res => {
           
          })
        })

        this.MesServices2.date = this.date;
        this.MesServices2.idRevenus = this.revenusId;
        this.MesServices2.nomServices = "الماء"
        this.MesServices2.prixService = this.Createdrevenus.attribut3;
        this.lesServicesServices.Add(this.MesServices2).subscribe(res => {

        })
      },
        err => {
          console.log(err);
          this.toastr.warning('لم تتم الإضافة', ' فشل');
        }
      )
    }
  }
}
