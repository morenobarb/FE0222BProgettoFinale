import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from 'src/interfaces/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private authSrv: AuthService) { }

  users!: Array<User>;
  resp! : any;
  actualPage: any;
  numberPage: any;

  ngOnInit(): void {
    this.authSrv.getAll(0).subscribe((x) =>{
      this.resp=x;
      this.users=this.resp.content;
      const numberPage = Array(this.resp.totalPages);
this.numberPage = numberPage;
    });
  }

changePage (page: number) {
  this.authSrv.getAll(page).subscribe((x) =>{
    this.resp= x;
    this.users= this.resp.content;
    this.actualPage= page;
  });
}

}
