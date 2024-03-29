import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
    private authService: AuthService,
    private storageService: StorageService) { }

  async canActivate(): Promise<boolean> {
    const user = this.storageService.getUser();
    if (user){
      const newUser:any = await Promise.resolve(this.authService.checkJWT(user.email));
      if (this.authService.isAuthenticated) {
        if (newUser && newUser != false && newUser.status == 'active'){
          return Promise.resolve(true);
      }
      else {
        this.router.navigate(['/auth/not-allowed']);
          return Promise.resolve(false);
      }
      }
      else {
        this.router.navigate(['/auth']);
        return Promise.resolve(false);
      }
    }
    else {
      this.router.navigate(['/auth']);
      return Promise.resolve(false);
    }
  }
}


