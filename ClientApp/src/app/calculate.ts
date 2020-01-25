import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Fare } from './Fare/Fare';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CalculateService {

  _url = '';
  constructor(private _http: HttpClient) {
    
  }

  enroll(fare: Fare) {
    return this._http.post<any>(this._url, fare)
      .pipe(new RTCError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
}
