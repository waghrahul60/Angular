import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    const newRequest =  request.clone({ headers: new HttpHeaders({ token : 'dsjhkfhgjsdgf'})});
    console.log('req interceptor',request);

    if(request.method === 'POST'){
      
    }
    return next.handle(newRequest);
  }
}
