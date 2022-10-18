import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import {  faAdd,faRemove,faSearch } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-holder',
  templateUrl: './users-holder.component.html',
  styleUrls: ['./users-holder.component.scss']
})
export class UsersHolderComponent implements OnInit {

  @Input('users') users:User[];
  faAdd = faAdd;
  faRemove = faRemove;
  faSearch = faSearch;
  canShowToast:boolean = false;
  apiResponse:{msg:string,code:number};
  searchedUser:string = '';
  constructor(private userService:UserService,
    private ngxSpinnerService: NgxSpinnerService,
    private authService:AuthService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }
  addUser(user:any,userId:string) {
    this.ngxSpinnerService.show();
    this.userService.addUser(userId)
      .then((result:any) => {
        this.ngxSpinnerService.hide();
        if (result) {
          this.apiResponse = {code:1200,msg:'Friend Added Successfully'};
          user.added = true;
        }
        else {
          this.apiResponse = {code:1001,msg:'Error'};
        }
        this.showToast();
      })
      .catch(err => {
        this.ngxSpinnerService.hide();
        this.apiResponse = {code:1001,msg:'Error'};
        this.showToast();
      })
  }

  removeUser(user:any,userId:string) {
    this.ngxSpinnerService.show();
    this.userService.removeUser(userId)
      .then((result:any) => {
        this.ngxSpinnerService.hide();
        if (result) {
          this.apiResponse = {code:1200,msg:'Friend Removed Successfully'};
          user.added = false;
        }
        else {
          this.apiResponse = {code:1001,msg:'Error'};
        }
        this.showToast();
      })
      .catch(err => {
        this.ngxSpinnerService.hide();
        this.apiResponse = {code:1001,msg:'Error'};
        this.showToast();
      })
  }

  showToast(){
    this.canShowToast = true;
    setTimeout(() => {
      this.canShowToast = false;
    },3000)
  }

  addUserRegister() {
    this.router.navigate(['/auth/register']);
  }

}
