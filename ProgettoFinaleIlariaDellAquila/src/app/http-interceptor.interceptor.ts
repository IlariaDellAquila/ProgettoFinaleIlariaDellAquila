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
  bearerToken='Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0NTIwNDc3MCwiZXhwIjoxNjQ2MDY4NzcwfQ.AvesHQU5ZN5jWj1vdZlZVf-frr0Zth8NvaTso-HkjRusNudNFIXH7q3Ah3LOE3n36qdTbEPJZoViv6_lo-RdNw';


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
