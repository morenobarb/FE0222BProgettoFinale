import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/interfaces/client';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }


  getAll(p: number) {
    return this.http.get(
      `${environment.pathApi}/api/clienti?page=${p}&size=20&sort=id,ASC`
    );
  }

  getById(id: number) {
    return this.http.get(`${environment.pathApi}/api/clienti/${id}`);
  }

  deleteInvoice(id: number) {
    return this.http.delete(`${environment.pathApi}/api/fatture/cliente/${id}`);
  }

  delete(id: number) {
    return this.http.delete(`${environment.pathApi}/api/clienti/${id}`);
  }

  getFattureByCliente(id: number, p: number) {
    return this.http.get(
      `${environment.pathApi}/api/fatture/cliente/${id}?page=${p}&size=20&sort=id,ASC`
    );
  }
  createClient(cliente: Client) {
    return this.http.post<Client>(`${environment.pathApi}/api/clienti`, cliente);
  }

  modif(id : number,data: any) {
    return this.http.put(`${environment.pathApi}/api/clienti/${id}`, data);
  }
  deleteallinvoicebyId(id: number) {
    console.log(id)
    return this.http.delete(`${environment.pathApi}/api/fatture/cliente/${id}`);

  }

}
