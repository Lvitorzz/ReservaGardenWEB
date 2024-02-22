import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produtos';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = `${environment.ApiUrl}Produto`

  constructor( private http: HttpClient) { }

  GetProdutos() : Observable<Response<Produto[]>>{
    return this.http.get<Response<Produto[]>>(this.apiUrl);
  }

  CreateProduto(produto: Produto) : Observable<Response<Produto[]>>{
    return this.http.post<Response<Produto[]>>(`${this.apiUrl}`, produto);
  }

  GetProduto(id : number) : Observable<Response<Produto>> {
    return this.http.get<Response<Produto>>(`${this.apiUrl}/${id}`);
  }

  EditarProduto(produto : Produto) : Observable<Response<Produto[]>>{
    return this.http.put<Response<Produto[]>>(`${this.apiUrl}`, produto);
  }

  InativaProduto(id: Number) : Observable<Response<Produto[]>>{
    return this.http.put<Response<Produto[]>>(`${this.apiUrl}/inativaProduto/${id}`, id);
  }
}