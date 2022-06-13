import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ControlatedError } from "@core/models/controlated-error.model";
import { catchError, Observable, throwError } from "rxjs";


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((error:any) => {
      const controlatedError = new ControlatedError();


      switch(error.status) {
        case 401:
          ControlatedError.message = 'No autenticado';
          break;
        case 404:
          ControlatedError.message = 'No encontrado';
          break;
        case 403:
          ControlatedError.message = 'Prohibido. No posee permisos';
          break;
        case 500:
          ControlatedError.message = 'Error interno del servidor';
          break;
        default:
          ControlatedError.message = 'Error inesperado';
          break;
      }


      return throwError(() => controlatedError);
    }));
  }

}
