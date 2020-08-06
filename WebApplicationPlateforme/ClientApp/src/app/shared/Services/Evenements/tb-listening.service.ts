import { Injectable } from '@angular/core';
import { PathSharedService } from '../../path-shared.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TbListening } from '../../Models/Evenements/tb-listening.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TbListeningService {

  constructor(private pathService: PathSharedService,
    private http: HttpClient) { }

  readonly rootURL = this.pathService.getPath();
  formData: TbListening;
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  //Create TacheEv

  AddT(dotation: TbListening) {
    return this.http.post<TbListening>(this.rootURL + '/TacheEvs', dotation, this.headers);
  }


  PostT() {
    return this.http.post(this.rootURL + '/TacheEvs', this.formData, this.headers);
  }



  GetTache(): Observable<TbListening[]> {
    return this.http.get<TbListening[]>(this.rootURL + '/TacheEvs');
  }

  GetT() {
    return this.http.get<TbListening[]>(this.rootURL + '/TacheEvs');
  }


  GetByIdT(Id) {
    return this.http.get<TbListening>(this.rootURL + '/TacheEvs/' + Id);
  }



  EditT() {
    return this.http.put(this.rootURL + '/TacheEvs/' + this.formData.id, this.formData, this.headers);
  }



  DeleteT(id) {
    return this.http.delete(this.rootURL + '/TacheEvs/' + id);
  }


  //Create Outils


  AddO(dotation: TbListening) {
    return this.http.post<TbListening>(this.rootURL + '/OutilsEvs', dotation, this.headers);
  }


  PostO() {
    return this.http.post(this.rootURL + '/OutilsEvs', this.formData, this.headers);
  }



  GetOutils(): Observable<TbListening[]> {
    return this.http.get<TbListening[]>(this.rootURL + '/OutilsEvs');
  }

  GetO() {
    return this.http.get<TbListening[]>(this.rootURL + '/OutilsEvs');
  }


  GetByIdO(Id) {
    return this.http.get<TbListening>(this.rootURL + '/OutilsEvs/' + Id);
  }



  EditO() {
    return this.http.put(this.rootURL + '/OutilsEvs/' + this.formData.id, this.formData, this.headers);
  }



  DeleteO(id) {
    return this.http.delete(this.rootURL + '/OutilsEvs/' + id);
  }



  //Create Beneficiaires

  AddB(dotation: TbListening) {
    return this.http.post<TbListening>(this.rootURL + '/Beneficiaires', dotation, this.headers);
  }


  PostB() {
    return this.http.post(this.rootURL + '/Beneficiaires', this.formData, this.headers);
  }



  GetBeneficiaire(): Observable<TbListening[]> {
    return this.http.get<TbListening[]>(this.rootURL + '/Beneficiaires');
  }

  GetB() {
    return this.http.get<TbListening[]>(this.rootURL + '/Beneficiaires');
  }


  GetByIdB(Id) {
    return this.http.get<TbListening>(this.rootURL + '/Beneficiaires/' + Id);
  }



  EditB() {
    return this.http.put(this.rootURL + '/Beneficiaires/' + this.formData.id, this.formData, this.headers);
  }



  DeleteB(id) {
    return this.http.delete(this.rootURL + '/Beneficiaires/' + id);
  }



  //Create ClasseEvs

  

  AddC(dotation: TbListening) {
    return this.http.post<TbListening>(this.rootURL + '/ClasseEvs', dotation, this.headers);
  }


  PosC() {
    return this.http.post(this.rootURL + '/ClasseEvs', this.formData, this.headers);
  }



  GetClasseEvs(): Observable<TbListening[]> {
    return this.http.get<TbListening[]>(this.rootURL + '/ClasseEvs');
  }

  GetC() {
    return this.http.get<TbListening[]>(this.rootURL + '/ClasseEvs');
  }


  GetByIdC(Id) {
    return this.http.get<TbListening>(this.rootURL + '/ClasseEvs/' + Id);
  }



  EditC() {
    return this.http.put(this.rootURL + '/ClasseEvs/' + this.formData.id, this.formData, this.headers);
  }



  DeleteC(id) {
    return this.http.delete(this.rootURL + '/ClasseEvs/' + id);
  }




  //Create MediasEvs


  AddM(dotation: TbListening) {
    return this.http.post<TbListening>(this.rootURL + '/MediasEvs', dotation, this.headers);
  }


  PostM() {
    return this.http.post(this.rootURL + '/MediasEvs', this.formData, this.headers);
  }



  GetMediasEvs(): Observable<TbListening[]> {
    return this.http.get<TbListening[]>(this.rootURL + '/MediasEvs');
  }

  GetM() {
    return this.http.get<TbListening[]>(this.rootURL + '/MediasEvs');
  }


  GetByIdM(Id) {
    return this.http.get<TbListening>(this.rootURL + '/MediasEvs/' + Id);
  }



  EditM() {
    return this.http.put(this.rootURL + '/MediasEvs/' + this.formData.id, this.formData, this.headers);
  }



  DeleteM(id) {
    return this.http.delete(this.rootURL + '/MediasEvs/' + id);
  }

  //Create activity


  AddA(dotation: TbListening) {
    return this.http.post<TbListening>(this.rootURL + '/ActivityEvs', dotation, this.headers);
  }


  PostA() {
    return this.http.post(this.rootURL + '/ActivityEvs', this.formData, this.headers);
  }



  GetActivityEvs(): Observable<TbListening[]> {
    return this.http.get<TbListening[]>(this.rootURL + '/ActivityEvs');
  }

  GetA() {
    return this.http.get<TbListening[]>(this.rootURL + '/ActivityEvs');
  }


  GetByIdA(Id) {
    return this.http.get<TbListening>(this.rootURL + '/ActivityEvs/' + Id);
  }



  EditA() {
    return this.http.put(this.rootURL + '/ActivityEvs/' + this.formData.id, this.formData, this.headers);
  }



  DeleteA(id) {
    return this.http.delete(this.rootURL + '/ActivityEvs/' + id);
  }

  //Create NomEquipement

  AddN(dotation: TbListening) {
    return this.http.post<TbListening>(this.rootURL + '/nomEquipements', dotation, this.headers);
  }


  PostN() {
    return this.http.post(this.rootURL + '/nomEquipements', this.formData, this.headers);
  }



  GetNom(): Observable<TbListening[]> {
    return this.http.get<TbListening[]>(this.rootURL + '/nomEquipements');
  }

  GetN() {
    return this.http.get<TbListening[]>(this.rootURL + '/nomEquipements');
  }


  GetByIdN(Id) {
    return this.http.get<TbListening>(this.rootURL + '/nomEquipements/' + Id);
  }



  EditN() {
    return this.http.put(this.rootURL + '/nomEquipements/' + this.formData.id, this.formData, this.headers);
  }



  DeleteN(id) {
    return this.http.delete(this.rootURL + '/nomEquipements/' + id);
  }

  //Create TypeEquipement

  AddE(dotation: TbListening) {
    return this.http.post<TbListening>(this.rootURL + '/typeEquipements', dotation, this.headers);
  }


  PostE() {
    return this.http.post(this.rootURL + '/typeEquipements', this.formData, this.headers);
  }



  GetType(): Observable<TbListening[]> {
    return this.http.get<TbListening[]>(this.rootURL + '/typeEquipements');
  }

  GetE() {
    return this.http.get<TbListening[]>(this.rootURL + '/typeEquipements');
  }


  GetByIdE(Id) {
    return this.http.get<TbListening>(this.rootURL + '/typeEquipements/' + Id);
  }



  EditE() {
    return this.http.put(this.rootURL + '/typeEquipements/' + this.formData.id, this.formData, this.headers);
  }



  DeleteE(id) {
    return this.http.delete(this.rootURL + '/typeEquipements/' + id);
  }
}
