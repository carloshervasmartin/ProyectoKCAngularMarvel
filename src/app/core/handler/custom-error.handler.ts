import { ErrorHandler } from "@angular/core";

export class CustomErrorHandler implements ErrorHandler{
  handleError(error: any): void {
    console.log(error.title, error.message, error.output);
  }

}
