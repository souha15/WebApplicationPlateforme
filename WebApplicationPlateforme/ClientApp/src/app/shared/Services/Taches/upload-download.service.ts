import { Injectable } from '@angular/core';
import { PathSharedService } from '../../path-shared.service';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PiecesJointes } from '../../Models/Taches/pieces-jointes.model';

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

  // Get list of files from DataBase

  getall() {
    return this.httpClient.get<PiecesJointes[]>(this.rootURL + '/PiecesJointes');
  }

  list: PiecesJointes[];

  refreshList() {
    this.httpClient.get(this.rootURL + '/PiecesJointes')
      .toPromise()
      .then(res => this.list = res as PiecesJointes[]);
  }

  Search(): Observable<PiecesJointes[]> {
    return this.httpClient.get<PiecesJointes[]>(this.rootURL + '/PiecesJointes');
  }

  //Delete Piece Jointe

  deletePj(id) {
    return this.httpClient.delete(this.rootURL + '/PiecesJointes/' + id);
  }
}
