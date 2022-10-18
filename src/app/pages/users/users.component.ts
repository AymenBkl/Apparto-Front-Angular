import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user:User;
  users:User[];
  
  
  constructor(private userService:UserService,
              private ngxSpinnerService: NgxSpinnerService,
              private authService:AuthService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.user = this.authService.user;
    this.getUsers();
  }

  getUsers() {
    this.ngxSpinnerService.show();
    this.userService.getUsers()
      .then((result:any) => {
        this.ngxSpinnerService.hide();
        if (result && result.status == 200) {
          result.user.map(u => {
            if (this.user.friends.find(user => user == u._id)) {
              u.added = true;
            }
          })
          this.users = result.user;
        }
      })
      .catch(err => {
        this.ngxSpinnerService.hide();
      })
  }

  

  
}
