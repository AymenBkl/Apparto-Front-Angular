import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  user:User;
  friends:User[];
  
  
  constructor(private userService:UserService,
              private ngxSpinnerService: NgxSpinnerService,
              private authService:AuthService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.user = this.authService.user;
    this.getFriends();
  }

  getFriends() {
    this.ngxSpinnerService.show();
    this.userService.getFriends()
      .then((result:any) => {
        this.ngxSpinnerService.hide();
        if (result && result.status == 200) {
          
          result.user[0].friends.map(f => {
            f.added = true;
          })
          this.friends = result.user[0].friends;
        }
      })
      .catch(err => {
        console.log(err);
        this.ngxSpinnerService.hide();
      })
  }

}
