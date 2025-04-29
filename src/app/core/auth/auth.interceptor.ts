import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const excludedUrls = ['/api/v1/auth/login', '/api/v1/auth/register'];

  const shouldSkip = excludedUrls.some(url => req.url.includes(url));
  if (shouldSkip) {
    return next(req);
  }

  let token: string | null = null;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('auth_token');
  }

  const authReq = token
    ? req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      })
    : req;

    console.log("Interceptor happened", token);
  return next(authReq);
};
