import { Injectable } from '@angular/core';
import { PathSharedService } from '../../path-shared.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transaction } from '../../Models/AdministrativeCommunication/transaction.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  constructor(private pathService: PathSharedService,
    private http: HttpClient) { }

  readonly rootURL = this.pathService.getPath();
  formData: Transaction;
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  //Create Transaction

  Create(Transaction: Transaction) {
    return this.http.post<Transaction>(this.rootURL + '/Transactions', Transaction, this.headers);
  }

  //Edit Transaction
  Edit() {
    return this.http.put(this.rootURL + '/Transactions/' + this.formData.id, this.formData, this.headers);
  }

  // List Transaction

  List(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.rootURL + '/Transactions');
  }


  //Delete Transaction

  Delete(id) {
    return this.http.delete(this.rootURL + '/Transactions/' + id);
  }

  //Put Transaction

  PutObservable(Transaction: Transaction) {
    return this.http.put<Transaction>(this.rootURL + '/Transactions/' + Transaction.id, Transaction, this.headers);
  }

  PutObservableTr(Transaction: Transaction) {
    return this.http.put<Transaction>(this.rootURL + '/Transactions/' + Transaction.id, Transaction, this.headers);
  }

  Put(Id) {
    return this.http.put(this.rootURL + '/Transactions/' + this.formData.id, this.formData, this.headers);
  }

  //Get Transaction By Id

  GetById(Id) {
    return this.http.get<Transaction>(this.rootURL + '/Transactions/' + Id);
  }
}
