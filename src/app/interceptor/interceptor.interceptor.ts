import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let authReq: HttpRequest<any> = request.clone({
      headers: request.headers
        .set(
          'Authorization',
          'Bearer ' +
            'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY1MzYzNTE1MSwiZXhwIjoxOTY4OTk1MTUxfQ.TbqmVvOUiGSeqtvLAfKz82S3dNfVALe9VhoUZkH4QA6aDfdUGKOd0xN-JSnLxWbNpjFX5zMAxr4Rdz8inxS8qg'
        )
        .set('X-TENANT-ID', 'fe_0222b'),
    });
    return next.handle(authReq);
  }
}
