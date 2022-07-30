import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Utils} from "../Utils/utils";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (Utils.getSessionStorage('login')) {
            return true;
        } else {
            this.router.navigate(['auth']).then(r => {
                return false;
            });
            return false;

        }
        // return true;
    }

}
