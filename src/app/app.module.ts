import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutes} from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomePageComponent } from './layouts/home-page/home-page.component';

import { NavbarModule } from 'src/app/components/nav/nav.module';
import { FooterModule } from './components/footer/footer.module';
import { AuthPageComponent } from './layouts/auth-page/auth-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LandingPageService } from './layouts/home-page/services/landing-page.service';
import { InterceptorService, UnauthorizedInterceptor } from './services/interceptor.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService,  } from './services/auth-guard.service';
import { NgxSpinnerModule } from "ngx-spinner";
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NavHomeComponent } from './components/nav-home/nav-home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserService } from './services/user.service';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: false
    }),
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    NavbarModule,
    FooterModule,
    HttpClientModule,
    NgxSpinnerModule,
    FontAwesomeModule
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    AuthPageComponent,
    SideNavComponent,
    NavHomeComponent,
  ],
  
  providers: [
    AuthService,
    AuthGuardService,
    LandingPageService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,

    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
