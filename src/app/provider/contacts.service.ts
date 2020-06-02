import { environment } from './../../environments/environment';
import { iContact } from './../models/contact.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public create(contact: iContact): Observable<iContact> {
    return this.httpClient.post<iContact>(this.apiUrl + '/contact', contact);
  }

  public find(query: string): Observable<iContact> {
    return this.httpClient.get<iContact>(this.apiUrl + '/contact?query=' + query);
  }

  public delete(id: string): Observable<iContact> {
    return this.httpClient.delete<iContact>(this.apiUrl + '/contact?id=' + id);
  }

  public update(id: string, data: any): Observable<iContact> {
    return this.httpClient.put<iContact>(this.apiUrl + '/contact', {id, data});
  }

  public getAll(): Observable<iContact[]> {
    return this.httpClient.get<iContact[]>(this.apiUrl + '/contact/all');
  }
}
