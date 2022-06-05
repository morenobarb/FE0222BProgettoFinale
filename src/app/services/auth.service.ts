import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(item: any) {
    return this.http.post<any>(`${environment.pathApi}/api/auth/login`, item);
  }

  signup(item: any) {
    return this.http.post<any>(`${environment.pathApi}/api/auth/signup`, item);
  }
  getAll(pages: number) {
    return this.http.get<any>(`${environment.pathApi}/api/users?page=${pages}&size=20&sort=id,ASC`);
  }
}
