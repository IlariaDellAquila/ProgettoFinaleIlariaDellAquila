import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  tenantID ='fe_0621';
  bearerToken='Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0NTc3NzcxOSwiZXhwIjoxNjQ2NjQxNzE5fQ.0bnK88cywRvarTEdutDLWXuBb0w8GvFqPovbDQtNOd_aMB0pHC8H-FCnFjsR3hZp_dXUNDG1q_TRxypMD4aRmw';


  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let myRequest: HttpRequest<any> = request;
    myRequest = request.clone(
      {headers: request.headers.set("Authorization", this.bearerToken)
                               .set("X-TENANT-ID", this.tenantID)
      }
    )
    
    return next.handle(myRequest);
  }
}
