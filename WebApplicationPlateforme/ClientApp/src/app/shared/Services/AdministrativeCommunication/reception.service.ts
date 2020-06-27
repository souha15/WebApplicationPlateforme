import { Injectable } from '@angular/core';
import { Reception } from '../../Models/AdministrativeCommunication/reception.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PathSharedService } from '../../path-shared.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceptionService {
  
  constructor(private pathService: PathSharedService,
    private http: HttpClient) { }

  readonly rootURL = this.pathService.getPath();
  formData: Reception;
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }


  //Create Reception

  CreateReception(Reception: Reception) {
    return this.http.post<Reception>(this.rootURL + '/Receptioncs', Reception, this.headers);
  }

  //Edit Reception
  EditReception() {
    return this.http.put(this.rootURL + '/Receptioncs/' + this.formData.id, this.formData, this.headers);
  }

  // List Reception

  ListReception(): Observable<Reception[]> {
    return this.http.get<Reception[]>(this.rootURL + '/Receptioncs');
  }

  //Delete Reception

  DeleteReception(id) {
    return this.http.delete(this.rootURL + '/Receptioncs/' + id);
  }

  //Put Reception

  PutReceptioneObservable(Reception: Reception, Id: number) {
    return this.http.put<Reception>(this.rootURL + '/Receptioncs/' + Id, Reception, this.headers);
  }

  PutReception(Id) {
    return this.http.put(this.rootURL + '/Receptioncs/' + this.formData.id, this.formData, this.headers);
  }

  //Get Reception By Id

  GetById(Id) {
    return this.http.get<Reception>(this.rootURL + '/Receptioncs/' + Id);
  }
}
