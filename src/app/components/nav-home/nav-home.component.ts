import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faBars , faCaretDown , faBell} from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.scss']
})
export class NavHomeComponent implements OnInit {

  faList = faBars;
  faCaret = faCaretDown;
  faBell = faBell;
  show_options = false;
  show_notifications = false;
  show_profile_items = false;
  selected_option = 'Home';
  options = [
    'Home',
    'Friends',
  ];
  notifications = [
    'You Are A Friend Now With Aymen',
  ];
  @ViewChild('hDrop')
  optionDrop!: ElementRef;
  user: User;
  constructor(private authService: AuthService,
              private router:Router) { }

  ngOnInit(): void {
    this.user = this.authService.user;
  }

  filterOptions() {
    return this.options.filter((e) => e != this.selected_option);
  }
  setOption(option: any) {
    this.selected_option = option;
    this.show_options = !this.show_options;
  }
  show_option() {
    this.show_options = !this.show_options;
  }

  show_notification() {
    this.show_notifications = !this.show_notifications;
  }

  show_profile() {
    this.show_profile_items = !this.show_profile_items;
  }

  logOut() {
    this.authService.destroyUserCredentials();
    this.router.navigate(['/auth/login']);
  }

}
