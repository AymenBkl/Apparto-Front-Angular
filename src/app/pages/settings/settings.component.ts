import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthResponse } from 'src/app/interfaces/response';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { slideInOut } from '../../animations/slideIn';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [
    slideInOut
  ]
})
export class SettingsComponent implements OnInit {

  @ViewChild('confirmButton') confirmButton: ElementRef;
  user:User;
  canShowToast:boolean = false;
  apiResponse:{msg:string,code:number};
  constructor(private authService: AuthService,
              private ngxSpinnerService: NgxSpinnerService,) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.user = this.authService.user;
    console.log(this.user);
  }

  

  selecteChanged(value:string) {
    this.user.role = value;
    this.ngxSpinnerService.show();
    setTimeout(() => {
      this.authService.updateUser(this.user._id,this.user)
      .then(result => {
        this.ngxSpinnerService.hide();
        if (result) {
          this.apiResponse = {code:1200,msg:'Success'};
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
    },1000);
    
  }

  showToast(){
    this.canShowToast = true;
    setTimeout(() => {
      this.canShowToast = false;
    },3000)
  }



}