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
  bearerToken='Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA0MTEyNCwiZXhwIjoxNjQzOTA1MTI0fQ.Dv1-_r1eTnKKt8Dd2-vbtodaxf6vqFzcQKwKxcX8JsTcVWk8IrD3XURJYZYtBc35lL4U9X8aSAdICbUxwSCxHg';


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
