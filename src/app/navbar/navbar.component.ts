import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private authSrv: AuthService, private router: Router) {}

  isLogged: any;

  ngOnInit(): void {
    this.isLogged = localStorage.getItem('utente');
  }
  isLoggedUtente(): boolean {
    return localStorage.getItem('utente') !== null;
  }

  logout() {
    this.router.navigate(['/']);
    return localStorage.clear();

  }


}
