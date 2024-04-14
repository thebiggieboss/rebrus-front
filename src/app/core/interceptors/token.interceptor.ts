import { HttpInterceptorFn } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieService);
  const authToken = cookieService.get('access_token');
  if (authToken) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return next(authReq).pipe(catchError(error => throwError(error)));
  } else {
    return next(req);
  }
};
