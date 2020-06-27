import { Injectable } from '@angular/core';
import { PathSharedService } from '../../path-shared.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Affectation } from '../../Models/AdministrativeCommunication/affectation.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {

  constructor(private pathService: PathSharedService,
    private http: HttpClient) { }

  readonly rootURL = this.pathService.getPath();
  formData: Affectation;
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  //Create Affectation

  Create(Affectation: Affectation) {
    return this.http.post<Affectation>(this.rootURL + '/TrAffectations', Affectation, this.headers);
  }

  //Edit Affectation
  Edit() {
    return this.http.put(this.rootURL + '/TrAffectations/' + this.formData.id, this.formData, this.headers);
  }

  // List Affectation

  List(): Observable<Affectation[]> {
    return this.http.get<Affectation[]>(this.rootURL + '/TrAffectations');
  }

  //Delete Affectation

  Delete(id) {
    return this.http.delete(this.rootURL + '/TrAffectations/' + id);
  }

  //Put Affectation

  PutObservable(Affectation: Affectation, Id: number) {
    return this.http.put<Affectation>(this.rootURL + '/TrAffectations/' + Id, Affectation, this.headers);
  }

  Put(Id) {
    return this.http.put(this.rootURL + '/TrAffectations/' + this.formData.id, this.formData, this.headers);
  }

  //Get Affectation By Id

  GetById(Id) {
    return this.http.get<Affectation>(this.rootURL + '/TrAffectations/' + Id);
  }
}
