import { Injectable } from "@angular/core";
import { HttpInterceptor } from '@angular/common/http';
import { stringify } from 'querystring';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req, next) {
        let token = localStorage.getItem('token')
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        })
        return next.handle(authRequest);
    }
}