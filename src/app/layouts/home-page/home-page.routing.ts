import { Routes } from "@angular/router";
import { FriendsComponent } from "src/app/pages/friends/friends.component";
import { SettingsComponent } from "src/app/pages/settings/settings.component";
import { UsersComponent } from "src/app/pages/users/users.component";


export const clientRoutes: Routes = [
    {path:'home',component:UsersComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'settings',component:SettingsComponent},
    { path: 'friends',component:FriendsComponent}
  ];