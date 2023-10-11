import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToolbarService } from './toolbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard  {
  isAuth: any;
  constructor(private router: Router, private http: HttpClient, public toolbar: ToolbarService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {

      // this.isAuth = this.toolbar.hide()
      this.isAuth = this.toolbar.valid;


    
        if (this.isAuth) {
        return true
        } else {
          this.router.navigate(['/login'])
          return false;
        }
       
      
    }

}
