import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';

      if (error.error instanceof ErrorEvent) {
        // Client-side or network error
        errorMessage = `An error occurred: ${error.error.message}`;
      } else {
        // Backend returned an unsuccessful response code
        errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
      }

      console.error(errorMessage);
      // Here you can add logic to show a toast notification or snackbar
      
      return throwError(() => error);
    })
  );
};
