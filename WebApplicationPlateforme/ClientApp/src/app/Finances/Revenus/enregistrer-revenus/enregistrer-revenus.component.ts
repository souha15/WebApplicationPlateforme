import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
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
import { ProgressStatus } from '../../../shared/Interfaces/progress-status';
import { UploadDownloadService } from '../../../shared/Services/Taches/upload-download.service';
import { PiecesJointesRevenus } from '../../../shared/Models/Dotations/pieces-jointes-revenus.model';
import { ProgressStatusEnum } from '../../../shared/Enum/progress-status-enum.enum';
import { HttpEventType, HttpClient } from '@angular/common/http';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { PathSharedService } from '../../../shared/path-shared.service';
import { DepotRevenus } from '../../../shared/Models/Dotations/depot-revenus.model';
import { DepotRevenusService } from '../../../shared/Services/Dotations/depot-revenus.service';


@Component({
  selector: 'app-enregistrer-revenus',
  templateUrl: './enregistrer-revenus.component.html',
  styleUrls: ['./enregistrer-revenus.component.css']
})
export class EnregistrerRevenusComponent implements OnInit {

  @ViewChild('htmlData') htmlData: ElementRef;
  @Input() public disabled: boolean;
  @Output() public uploadStatuss: EventEmitter<ProgressStatus>;
  @ViewChild('inputFile') inputFile: ElementRef;
  @ViewChild('inputFile1') inputFile1: ElementRef;
  @ViewChild('inputFile2') inputFile2: ElementRef;

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
    private lesServicesServices: LesServicesService,
    public serviceupload: UploadDownloadService,
    private rootUrl: PathSharedService,
    private depotService: DepotRevenusService,
    private http: HttpClient,
  ) { this.uploadStatuss = new EventEmitter<ProgressStatus>();}

  ngOnInit(): void {
    this.getIdUrl();
    this.getLocationDetails();
    this.GetRevenusServicesList();
    this.getUserConnected();
    this.getFiles();
    this.depotRevenusList();
    this.CalculRetard()
 
  
  }


  // Depot Revenus List
  depot: DepotRevenus[] = [];
  depotRevenusList() {
    this.depotService.Get().subscribe(res => {
      this.depot=res
    })
  }
  //Location Detais
  
  LocationId: number;
  tache: Location = new Location();
  getIdUrl() {
    this.routeSub = this.route.params.subscribe(params => {
      this.LocationId = params['id']
      console.log(this.LocationId)
    });


  }

  //Get services list
  getServicesList() {
    this.lesServicesServices.Get().subscribe(res => {
      this.listS = res
  
    }
    )
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

  //Retard
  prixpaye: number;
  retardTest(event) {
    this.prixpaye = +event.target.value;

  }

  // Calcul Retard

  LocationRetard: Location = new Location();
  currentdate = new Date();
  currentmonth: any;
  currentyear: any;
  debutContrat: any;
  AnneedebutContrat:any
  MoisdebutContrat: any;
  revenusRetardList: Revenus[] = [];
  FiltredrevenusRetardList: Revenus[] = [];
  nbmonths: any;
  nbMoisNonPaye: number;
  dette: number;
  CalculRetard() {
    this.LocationService.GetById(+this.LocationId).subscribe(res => {
      this.LocationRetard = res;

      //Get current Month and year 
      this.currentmonth = this.currentdate.getMonth() + 1;
      this.currentyear = this.currentdate.getFullYear();
   
      //Get Location Month and year
      this.debutContrat = this.LocationRetard.datedebutcontrat
      let newDate = new Date(this.debutContrat);
      this.MoisdebutContrat = newDate.getMonth() + 1
      this.AnneedebutContrat = newDate.getFullYear();

     
     var months;
      months = (this.currentyear - this.AnneedebutContrat) * 12;
      months -= this.MoisdebutContrat;
      months += this.currentmonth;
      months <= 0 ? 0 : months;
      this.nbmonths = months + 1;
      

      //Filtering
      this.revenusService.Get().subscribe(res => {

        this.revenusRetardList = res

        this.FiltredrevenusRetardList = this.revenusRetardList.filter(item => item.idunite == this.LocationRetard.idunite && item.idLocataire == this.LocationRetard.idlocataire)
        if (this.FiltredrevenusRetardList.length < this.nbmonths) {
          this.nbMoisNonPaye = this.nbmonths - this.FiltredrevenusRetardList.length
          this.dette = +this.LocationRetard.prixlocationmois * this.nbMoisNonPaye;
          this.revenus.restePrixTotaleLocation = this.dette.toString();

        }

        
      }
        )


    });
  }


  //onSubmit
  revenus: Revenus = new Revenus();
  Createdrevenus: Revenus = new Revenus();
  MesServices: LesServices = new LesServices();
  MesServices2: LesServices = new LesServices();
  MesServices3: LesServices = new LesServices();
  reste: number;
  prixser: number;
  isValidFormSubmitted = false;
  date = new Date().toLocaleDateString();
  revenusId: number;
  listS: LesServices[] = [];
  filtredlistS: LesServices[] = [];
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
    this.reste = +this.prixlocation - this.prixpaye;
    let calc: number;
    calc = +this.dette - +this.prixlocation;
    this.dette = calc
    this.revenus.restePrixTotaleLocation = this.dette.toString();

    if (form.invalid) {
      this.isValidFormSubmitted = false;

    } else {
      this.isValidFormSubmitted = true
      this.revenusService.Add(this.revenus).subscribe(res => {
        
        this.revenusId = res.id

        this.Createdrevenus.mois = this.revenus.mois
        this.Createdrevenus.attribut2 = this.revenus.attribut2
        this.Createdrevenus.prixTot = this.revenus.prixTot
        this.Createdrevenus.infoDepot = this.revenus.infoDepot
        this.Createdrevenus.deposant = this.revenus.deposant
        this.Createdrevenus.dateTemps = this.revenus.dateTemps
       // this.Createdrevenus.restePrixTotaleLocation = this.dette.toString();
        this.dette = calc

        this.toastr.success("تمت الإضافة بنجاح", "نجاح");

        this.selected.forEach(item => {
          this.prixser = +item.prix;
          
          this.MesServices.date = this.date;
          this.MesServices.idRevenus = this.revenusId;
          this.MesServices.nomServices = item.nom;
          this.MesServices.prixService = item.prix;         
          this.lesServicesServices.Add(this.MesServices).subscribe(res => {
           
          })

    
        })


        //Eau

        if (this.eau != '') {}
        this.MesServices2.date = this.date;
        this.MesServices2.idRevenus = this.revenusId;
        this.MesServices2.nomServices = "الماء"
        this.MesServices2.prixService = this.eau;     
        this.lesServicesServices.Add(this.MesServices2).subscribe(res => {
     
        })

        //Electricité 
        if (this.elec != '') {
          this.MesServices3.date = this.date;
          this.MesServices3.idRevenus = this.revenusId;
          this.MesServices3.nomServices = "الكهرباء"
          this.MesServices3.prixService = this.elec;
          let elecn = +this.elec
      
          this.lesServicesServices.Add(this.MesServices3).subscribe(res => {

          })
        }

        this.lesServicesServices.Get().subscribe(res => {
          this.listS = res
          console.log(this.listS)
          this.filtredlistS = this.listS.filter(item => item.idRevenus == this.revenusId)
          console.log(this.filtredlistS)
        })

        //upload1

        this.pj.idrevenus = this.revenusId;
        this.pj.date = this.date;
        this.pj.type = 'الايداع'
        let path = this.rootUrl.getPath();
        this.fileslist.forEach(item => {
          this.pj.path = item;
          this.http.post(path + '/piecesjointesRevenus', this.pj)
            .subscribe(res => {
              this.serviceupload.refreshListR();
              this.GetFileName();
            
            })
        })
        //upload 2
        this.pj1.idrevenus = this.revenusId;
        this.pj1.date = this.date;
        this.pj1.type = 'السندات'
        let path1 = this.rootUrl.getPath();
        this.fileslist1.forEach(item => {
          this.pj1.path = item;
          this.http.post(path1 + '/piecesjointesRevenus', this.pj1)
            .subscribe(res => {
              this.serviceupload.refreshListR();
              this.GetFileName();
              
            })
        })
        //upload 3

        this.pj2.idrevenus = this.revenusId;
        this.pj2.date = this.date;
        this.pj2.type = 'الكشف'
        let path2 = this.rootUrl.getPath();
        this.fileslist2.forEach(item => {
          this.pj2.path = item;
          this.http.post(path2 + '/piecesjointesRevenus', this.pj2)
            .subscribe(res => {
              this.serviceupload.refreshListR();
              this.GetFileName();
          
            })
        })

     

        form.resetForm();
      
      },
        err => {
          console.log(err);
          this.toastr.warning('لم تتم الإضافة', ' فشل');
        }
      )


    }
  }

  eau: string;
  testeau(event) {
    this.eau = event.target.value
    this.eau.toString();
  }

  elec: string;
  testelec(event) {
    this.elec = event.target.value
    this.elec.toString();
  }


  //Files


  public response: { 'dbpathsasstring': '' };
  public isCreate: boolean;
  public pj: PiecesJointesRevenus = new PiecesJointesRevenus();
  public pjs: PiecesJointesRevenus[];
  public pj1: PiecesJointesRevenus = new PiecesJointesRevenus();
  public pjs1: PiecesJointesRevenus[];
  public pj2: PiecesJointesRevenus = new PiecesJointesRevenus();
  public pjs2: PiecesJointesRevenus[];
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
      console.log(this.fileslist)
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

  //DeleteFile


  onDelete(Id) {
    if (confirm('هل أنت متأكد من حذف هذا الملف ?')) {
      this.serviceupload.deletePjR(Id)
        .subscribe(res => {
          this.serviceupload.refreshListR();
          this.toastr.success("تم الحذف  بنجاح", "نجاح");
        },

          err => {
            console.log(err);
            this.toastr.warning('لم يتم الحذف  ', ' فشل');

          }
        )

    }
  }

  //impression
  path: string;
  public openPDF() {
    this.lesServicesServices.Get().subscribe(res => {
      this.listS = res
      console.log(this.listS)
      this.filtredlistS = this.listS.filter(item => item.idRevenus == this.revenusId)
      console.log(this.revenusId)
      console.log(this.filtredlistS)
    }
    )
    var data = document.getElementById('htmlData');
    data.style.display = "block";
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      data.style.display = "none"
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF

      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      this.path = "Revenus" + this.revenus.id + ".pdf"
      pdf.save(this.path); // Generated PDF

    });

  }

}
