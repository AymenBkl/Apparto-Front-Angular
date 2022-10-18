import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CarouselModule } from "ngx-owl-carousel-o";
import { clientRoutes } from "./home-page.routing";
import { SearchUsers } from './pipes/search-user.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SettingsComponent } from "src/app/pages/settings/settings.component";
import { UsersComponent } from "src/app/pages/users/users.component";
import { SideNavComponent } from "src/app/components/side-nav/side-nav.component";
import { NavHomeComponent } from "src/app/components/nav-home/nav-home.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { UsersHolderComponent } from "src/app/components/users-holder/users-holder.component";
import { FriendsComponent } from "src/app/pages/friends/friends.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(clientRoutes),
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    HttpClientModule,
    NgxSpinnerModule,
    FontAwesomeModule
  ],
  declarations: [  
    SearchUsers,
    SettingsComponent,
    UsersComponent,
    UsersHolderComponent,
    FriendsComponent
  ],
  providers:[
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class HomePageLayoutModule {}
