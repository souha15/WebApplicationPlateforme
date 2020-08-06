import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserServiceService } from '../../shared/Services/User/user-service.service';
import { EvenementService } from '../../shared/Services/Evenements/evenement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Evenement } from '../../shared/Models/Evenements/evenement.model';
import { MediaService } from '../../shared/Services/Evenements/media.service';
import { ParticipantService } from '../../shared/Services/Evenements/participant.service';
import { DepenseService } from '../../shared/Services/Evenements/depense.service';
import { Participant } from '../../shared/Models/Evenements/participant.model';
import { Media } from '../../shared/Models/Evenements/media.model';
import { Depenses } from '../../shared/Models/Evenements/depenses.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  private routeSub: Subscription;

  constructor(private route: ActivatedRoute,
    private UserService: UserServiceService,
    private router: Router,
    private mediaService: MediaService,
    private participationService: ParticipantService,
    private depenseService: DepenseService,
    private eventService: EvenementService,) { }

  ngOnInit(): void {
    this.getIdUrl();
    this.getUserConnected();
    this.getDepenseList();
    this.getPartList();
    this.getMediaList();

  }

  // Get User Connected

  UserIdConnected: string;
  UserNameConnected: string;

  getUserConnected() {

    this.UserService.getUserProfileObservable().subscribe(res => {
      this.UserIdConnected = res.id;
      this.UserNameConnected = res.fullName;
      if (this.ev.idUserCreator == this.UserIdConnected) {
        this.edit = true;
     
      }
    })
  }


  //get the id in Url

  eventId: number;
  ev: Evenement = new Evenement();
  edit: boolean=false;

  getIdUrl() {
    this.routeSub = this.route.params.subscribe(params => {
      this.eventId = params['id']

      this.eventService.GetById(this.eventId).subscribe(res => {
        this.ev = res 
      
   
   
      })
    });


  }


  // Participant Service

  ParListF: Participant[]=[]
  ParList: Participant[]=[]

  getPartList() {
    this.participationService.List().subscribe(res => {
      this.ParList = res
      this.ParListF = this.ParList.filter(item => item.idEvent == this.eventId)
    })

  }

  // Media List

  MediaListF: Media[] = [];
  MediaList: Media[] = [];
  mediafb: string;
  mediay: string;
  mediainsta: string;
  mediatwit: string;

  getMediaList() {
    this.mediaService.GetM().subscribe(res => {
      this.MediaList = res
   
      this.MediaListF = this.MediaList.filter(item => item.idEvent == this.eventId)
  
      this.MediaListF.forEach(item => {
      
        if (item.nom == 'الانستقرام') {
          this.mediainsta = item.path
         
        } 

        if (item.nom == 'الفيسبوك') {
          this.mediafb = item.path
          
        }

        if (item.nom == 'اليوتيوب') {
          this.mediay = item.path
        
        }

        if (item.nom == 'تويتر') {

          this.mediatwit = item.path
       
        }
      })
    })

  }
 
  //Depense Service

  DepListF: Depenses[] = [];
  DepList: Depenses[] = [];

  getDepenseList() {
    this.depenseService.List().subscribe(res => {
      this.DepList = res

      this.DepListF = this.DepList.filter(item => item.idEvent == this.eventId)
    })
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
