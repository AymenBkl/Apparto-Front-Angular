import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {  faHomeAlt, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  baseRoute = 'home';
  route = "Overview";
  subRoute = "";
  list = [
  {
    title : "Home" , icon : faHomeAlt,route:'home',
  },
  {
    title : "Friends" ,route:'friends',subList:[
      {title:"Friends",route:'friends'},    
    ], icon : faUser
  }]
  constructor(private router:Router) { 
    this.router.events.forEach(event => {
      if (event instanceof NavigationEnd){
        //this.detectRoute();
      }
    })
  }

  ngOnInit(): void {
  }

  changeRoute(item : any){
    this.route = item.title;
    console.log(item);
    if (item.subList && item.subList.length > 0) {
      if (this.route == 'Friends' &&  this.subRoute == '')
      {
        this.subRoute = "Friends";
        this.router.navigate([`${this.baseRoute}/${item.route}`])
      }
      else {
        this.router.navigate([`${this.baseRoute}/${item.route}`]);
      }
    }
    else{
      this.subRoute = '';
      this.router.navigate([`${this.baseRoute}/${item.route}`]);
    }
  }

  changeSubRoute(subRoute:any,route:any) {
    this.subRoute = subRoute.title;
    console.log(`${this.baseRoute}/${route.route}/${subRoute.route}`);
    this.router.navigate([`${this.baseRoute}/${route.route}/${subRoute.route}`]);
  }

  detectRoute() {
    console.log(this.router.url);
    let currentUrl = this.router.url.split('/');
    console.log(currentUrl);
    if (currentUrl && currentUrl[2]){
      let mainPath = this.list.find(r => r.route == currentUrl[2]);
      if (mainPath) {
        this.route = mainPath.title;
        if (mainPath.subList) {
          if (currentUrl[3]){
            let mainSubRoute = mainPath.subList.find(s => s.route == currentUrl[3]);
            if (mainSubRoute) {
              this.subRoute = mainSubRoute.title;
            }
            else {
              this.subRoute = mainPath.subList[0].title;
            }
          }
        }
      }
    }
  }

}
