import { Injectable } from '@angular/core';
import { Liaison } from '../../Models/AdministrativeCommunication/liaison.model';
import { PathSharedService } from '../../path-shared.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiaisonService {

  constructor(private pathService: PathSharedService,
    private http: HttpClient) { }

  readonly rootURL = this.pathService.getPath();
  formData: Liaison;
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  //Create Liaison

  Create(Liaison: Liaison) {
    return this.http.post<Liaison>(this.rootURL + '/Liaisons', Liaison, this.headers);
  }

  //Edit Liaison
  Edit() {
    return this.http.put(this.rootURL + '/Liaisons/' + this.formData.id, this.formData, this.headers);
  }

  // List Liaison

  List(): Observable<Liaison[]> {
    return this.http.get<Liaison[]>(this.rootURL + '/Liaisons');
  }

  //Delete Liaison

  Delete(id) {
    return this.http.delete(this.rootURL + '/Liaisons/' + id);
  }

  //Put Liaison

  PutObservable(Liaison: Liaison, Id: number) {
    return this.http.put<Liaison>(this.rootURL + '/Liaisons/' + Id, Liaison, this.headers);
  }

  Put(Id) {
    return this.http.put(this.rootURL + '/Liaisons/' + this.formData.id, this.formData, this.headers);
  }

  //Get Liaison By Id

  GetById(Id) {
    return this.http.get<Liaison>(this.rootURL + '/Liaisons/' + Id);
  }
}

