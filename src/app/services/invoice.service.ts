import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http:HttpClient ) { }
  getAll(p: number) {
    return this.http.get(
      `${environment.pathApi}/api/fatture?page=${p}&size=20&sort=id,ASC`
    );
  }

  details(id: number) {
    return this.http.get(`${environment.pathApi}/api/fatture/${id}`);
  }

  modify(data: any) {
    return this.http.put(`${environment.pathApi}/api/fatture/${data.id}`, data);
  }

  delete(id: any) {
    return this.http.delete(`${environment.pathApi}/api/fatture/${id}`);
  }

  createInvoice(data: any) {
    return this.http.post(`${environment.pathApi}/api/fatture`, data);
  }
}
