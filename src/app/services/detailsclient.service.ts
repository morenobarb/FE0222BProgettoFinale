import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DetailsclientService {
  constructor(private http: HttpClient) {}

  tipoClient() {
    return this.http.get(`${environment.pathApi}/api/clienti/tipicliente`);
  }
  createNewClient(data: any) {
    return this.http.post(
      `${environment.pathApi}/api/clienti/tipicliente`,
      data
    );
  }
}
