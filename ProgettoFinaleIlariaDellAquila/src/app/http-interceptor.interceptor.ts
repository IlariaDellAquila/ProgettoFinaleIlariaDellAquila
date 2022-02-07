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
  bearerToken='Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0NDIyNzEwOSwiZXhwIjoxNjQ1MDkxMTA5fQ.u1D1ICBU7GRsUaq5WXYG_7uUpFjXRjgG1wjqPSwH2hWHmAIDBswwVhcWbdmYj70GnE96bP4I2KuyR6QoV-qiuA';


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
