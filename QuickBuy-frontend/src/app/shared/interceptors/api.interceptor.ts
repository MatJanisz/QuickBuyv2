import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
// import { Observable } from 'rxjs/Observable'; bylo
// import { Observable } from 'rxjs/Observable';
import { Observable, of } from 'rxjs';


@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiReq = req.clone({ url: `http://localhost:49165/api/${req.url}` });
    return next.handle(apiReq);
  }
}

