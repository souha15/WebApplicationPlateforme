import { Injectable } from '@angular/core';
import { PathSharedService } from '../../path-shared.service';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PiecesJointes } from '../../Models/Taches/pieces-jointes.model';
import { PiecesJointesLocataire } from '../../Models/Dotations/pieces-jointes-locataire.model';
import { PiecesJointesRevenus } from '../../Models/Dotations/pieces-jointes-revenus.model';
import { PiecesjointerevenusService } from '../Dotations/piecesjointerevenus.service';
import { ContratLocation } from '../../Models/Dotations/contrat-location.model';

@Injectable({
  providedIn: 'root'
})
export class UploadDownloadService {

  private baseApiUrl: string;
  private apiDownloadUrl: string;
  private apiUploadUrl: string;
  private apiFileUrl: string;


  constructor(private pathService: PathSharedService,
    private httpClient: HttpClient) {
    this.baseApiUrl = this.pathService.getPath();
    this.apiDownloadUrl = this.baseApiUrl + '/UploadDownload/download';
    this.apiUploadUrl = this.baseApiUrl + '/UploadDownload/upload';
    this.apiFileUrl = this.baseApiUrl + '/UploadDownload/files';

  }


  readonly rootURL = this.pathService.getPath();
  formData: PiecesJointes;
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  public downloadFile(file: string): Observable<HttpEvent<Blob>> {
    return this.httpClient.request(new HttpRequest(
      'GET',
      `${this.apiDownloadUrl}?file=${file}`,
      null,
      {
        reportProgress: true,
        responseType: 'blob'
      }));
  }

  public uploadFile(file: Blob): Observable<HttpEvent<void>> {
    const formData = new FormData();
    formData.append('file', file);

    return this.httpClient.request(new HttpRequest(
      'POST',
      this.apiUploadUrl,
      formData,
      {
        reportProgress: true
      }));
  }

  //Get Files list from wwroot

  public getFiles(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiFileUrl);
  }

  //Save file

  savefile() {
    return this.httpClient.post(this.rootURL + '/PiecesJointes', this.apiFileUrl)
  }


  savefileL() {
    return this.httpClient.post(this.rootURL + '/piecesjointesLocataires', this.apiFileUrl)
  }

  savefileR() {
    return this.httpClient.post(this.rootURL + '/piecesjointesRevenus', this.apiFileUrl)
  }

  savefileC() {
    return this.httpClient.post(this.rootURL + '/contratLocations', this.apiFileUrl)
  }

  // Get list of files from DataBase

  getall() {
    return this.httpClient.get<PiecesJointes[]>(this.rootURL + '/PiecesJointes');
  }

  getallL() {
    return this.httpClient.get<PiecesJointesLocataire[]>(this.rootURL + '/piecesjointesLocataires');
  }

  getallR() {
    return this.httpClient.get<PiecesJointesRevenus[]>(this.rootURL + '/piecesjointesRevenus');
  }

  getallC() {
    return this.httpClient.get<ContratLocation[]>(this.rootURL + '/contratLocations');
  }

  list: PiecesJointes[];

  refreshList() {
    this.httpClient.get(this.rootURL + '/PiecesJointes')
      .toPromise()
      .then(res => this.list = res as PiecesJointes[]);
  }

  listL: PiecesJointesLocataire[];
  listR: PiecesJointesRevenus[];
  listC: ContratLocation[];
  refreshListL() {
    this.httpClient.get(this.rootURL + '/piecesjointesLocataires')
      .toPromise()
      .then(res => this.listL = res as PiecesJointesLocataire[]);
  }

  refreshListR() {
    this.httpClient.get(this.rootURL + '/piecesjointesRevenus')
      .toPromise()
      .then(res => this.listR = res as PiecesJointesRevenus[]);
  }

  refreshListC () {
    this.httpClient.get(this.rootURL + '/contratLocations')
      .toPromise()
      .then(res => this.listC = res as ContratLocation[]);
  }

  Search(): Observable<PiecesJointes[]> {
    return this.httpClient.get<PiecesJointes[]>(this.rootURL + '/PiecesJointes');
  }

  SearchL(): Observable<PiecesJointesLocataire[]> {
    return this.httpClient.get<PiecesJointesLocataire[]>(this.rootURL + '/piecesjointesLocataires');
  }

  SearchR(): Observable<PiecesJointesRevenus[]> {
    return this.httpClient.get<PiecesJointesRevenus[]>(this.rootURL + '/piecesjointesRevenus');
  }

  SearchC(): Observable<ContratLocation[]> {
    return this.httpClient.get<ContratLocation[]>(this.rootURL + '/contratLocations');
  }

  //Delete Piece Jointe

  deletePj(id) {
    return this.httpClient.delete(this.rootURL + '/PiecesJointes/' + id);
  }

  deletePjL(id) {
    return this.httpClient.delete(this.rootURL + '/piecesjointesLocataires/' + id);
  }

  deletePjR(id) {
    return this.httpClient.delete(this.rootURL + '/piecesjointesRevenus/' + id);
  }

  deletePjC(id) {
    return this.httpClient.delete(this.rootURL + '/contratLocations/' + id);
  }
}
