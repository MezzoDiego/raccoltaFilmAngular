import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiServer = 'http://localhost:8080/api';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  

  private userLoggedSubject$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null)

  login(loginForm: User): Observable<User> {
    return this.http.post<{'jwt-token': string}>(this.apiServer + "/auth/login", JSON .stringify(loginForm), this.httpOptions).pipe(
      switchMap(res => of({ username: loginForm.username, token: res['jwt-token'] }))
    );
    // return this.http.post<User>("login", JSON .stringify(loginForm));
  }

  setUserLogged(user: User | null) {
    this.userLoggedSubject$.next(user);
  }

  getUserLogged(): Observable<User | null> {
    return this.userLoggedSubject$.asObservable();
  }

  getUserRoles(): Observable<{roles: string[]}> {
    return this.http.get<{roles: string[]}>(this.apiServer + "/utente/userInfo");
  }

  isLoggedIn(): boolean {
    return this.userLoggedSubject$.value ? !!this.userLoggedSubject$.value.token : false;
  }

  getUserToken(): string | null  {
    return this.userLoggedSubject$.value ? this.userLoggedSubject$.value.token : null;
  }

  logout() {    
    this.setUserLogged(null);
  }

}
