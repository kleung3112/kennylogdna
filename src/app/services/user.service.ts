import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  //http://localhost:3000
  //https://kenny-logdna-api.herokuapp.com
  url = 'https://kenny-logdna-api.herokuapp.com';

  sendMsg(message: string): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/X-www-form-urlencoded'});
    const msg = 'message=' + message;
    return this.http.post(this.url + '/user/message', msg, {headers})
    .pipe(
      catchError((err: any) => {
        return throwError(err);
      })
    );
  }
}
