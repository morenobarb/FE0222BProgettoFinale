import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user = {
    username: '',
    email: '',
    password: '',
    role: [],
  };

  constructor(private authSrv: AuthService, private router: Router) {}

  ngOnInit(): void {}

  signup(form: {username : string; email: string; password: string; roles:any}) {
    const ruolo = Array();
    ruolo.push(form.roles);
    this.user.username = form.username;
    this.user.email = form.email;
    this.user.password = form.password;
    this.user.role = ruolo[0];
    this.authSrv.signup(this.user).subscribe((res) => {
      this.router.navigate(['/login']);
    });
  }
}
