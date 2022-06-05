import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ComunieprovinceService {
  constructor(private http: HttpClient) {}

  getComuni(page: number) {
    return this.http.get<any>(
      `${environment.pathApi}/api/comuni?page=${page}&size=20&sort=id,ASC`
    );
  }
  getProvince(page: number) {
    return this.http.get<any>(
      `${environment.pathApi}/api/province?page=${page}&size=20&sort=id,ASC`
    );
  }
  getIdProvincia(id: number) {
    return this.http.get(`${environment.pathApi}/api/province/${id}`);
  }

  getIdComune(id: number) {
    return this.http.get(`${environment.pathApi}/api/comuni/${id}`);
  }


}
