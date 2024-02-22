import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Admin } from '../models/Admin';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = `${environment.ApiUrl}Admin`

  constructor(private http: HttpClient) { }

  AutenticarUsuario(admin: Admin) : Observable<Response<Admin>> {
    return this.http.post<Response<Admin>>(`${this.apiUrl}/authenticate`, admin);
  }
}
