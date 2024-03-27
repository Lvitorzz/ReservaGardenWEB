import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { MoradorProduto } from '../models/moradorProduto';
import { Response } from '../models/Response';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoradorProdutoService {
  
  private apiUrl = `${environment.ApiUrl}MoradorProduto`;

  constructor( private http: HttpClient ) { }

  getMoradorProdutos() : Observable<Response<MoradorProduto[]>>{
    return this.http.get<Response<MoradorProduto[]>>(`${this.apiUrl}/getMoradorProdutos`);
  }
}
