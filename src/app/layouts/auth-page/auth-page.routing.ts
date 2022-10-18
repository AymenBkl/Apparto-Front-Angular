import { Routes } from "@angular/router";
import { LoginComponent } from "src/app/auth/login/login.component";
import { LogoutComponent } from "src/app/auth/logout/logout.component";
import { NotAllowedComponent } from "src/app/auth/not-allowed/not-allowed.component";
import { RegisterComponent } from "src/app/auth/register/register.component";
import { ResetPasswordComponent } from "src/app/auth/reset-password/reset-password.component";
import { VerifyChangeEmailComponent } from "src/app/auth/verify-change-email/verify-change-email.component";
import { VerifyEmailComponent } from "src/app/auth/verify-email/verify-email.component";

export const authRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component:LoginComponent },
    { path: 'register', component:RegisterComponent },
    { path: 'reset-password', component:ResetPasswordComponent },
    { path: 'verify-change-email', component:VerifyChangeEmailComponent},
    { path: 'logout', component:LogoutComponent, },
    { path: 'not-allowed', component:NotAllowedComponent },
    { path: 'verify-email', component:VerifyEmailComponent },
  ];