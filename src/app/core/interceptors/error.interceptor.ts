import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { LoginService } from '@core/services/login.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const loginService = inject(LoginService);
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        loginService.logout();
      }
      return throwError(err);
    })
  );
};
