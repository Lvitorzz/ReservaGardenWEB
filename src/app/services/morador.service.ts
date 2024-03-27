import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Morador } from '../models/Morador';
import { Response } from '../models/Response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoradorService {

  private apiUrl = `${environment.ApiUrl}Morador`;
  
  constructor( private http: HttpClient ) { }

  GetMoradores() : Observable<Response<Morador[]>>{
    return this.http.get<Response<Morador[]>>(this.apiUrl);
  }
}
