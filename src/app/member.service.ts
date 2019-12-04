import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Member } from './models/member.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private baseUrl = 'http://localhost:3000/members';

  constructor(private httpClient: HttpClient) { }

  // Returns list of Members as observables
  getMembers(): Observable<Member[]> {
    return this.httpClient.get<Member[]>(this.baseUrl)
            .pipe(catchError(this.handleError));
  }

  // handling http errors, server side errors(404 or 500) or
  // client side errors(network error, exception thrown in rxjs operator)
  private handleError(errorResponse: HttpErrorResponse) {
    // differentiating server and client side errors
    if (errorResponse.error instanceof ErrorEvent) {
      console.log('client side: ', errorResponse.error.message);
    } else {
      console.log('Server side error: ', errorResponse);
    }
    return throwError('There is a problem with the service. We are notified and working on it. Please try again later.');
  }

  // get a member
  getMember(id: number): Observable<Member> {
    return this.httpClient.get<Member>(`${this.baseUrl}/${id}`)
    .pipe(catchError(this.handleError));
  }

  registerMember(member: Member): Observable<Member> {
    return this.httpClient.post<Member>(this.baseUrl, member, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(catchError(this.handleError));
  }

  updateMember(member: Member): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${member.id}`, member, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

  // removing a member using their "id"
  removeMember(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
            .pipe(catchError(this.handleError));
  }

}
