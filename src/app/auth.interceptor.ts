import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, flatMap } from 'rxjs/operators';

import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{

    static API_URL = 'http://interview.agileengine.com/auth';
    static API_KEY = '23567b218376f79d9415';

    constructor(private http: HttpClient) { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      let token: string = localStorage.getItem('api-token');

      if (token) {
        req = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
        });
      }

      return next.handle(req).pipe(
        catchError(e => {
          if (e.status === 401) {
            const body = {
              apiKey: AuthInterceptor.API_KEY
            };

            return this.http.post(AuthInterceptor.API_URL, body).pipe(
              flatMap((auth: any) => {
                localStorage.setItem('api-token', auth.token);
                req = req.clone({
                  setHeaders: {
                      Authorization: `Bearer ${auth.token}`
                  }
                });
                return next.handle(req);
              })
            );
          }
        })
      );
  }
}
