import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/Produtos';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit{
  produtos: Produto[] = [];
  dataAtual: Date = new Date();

  constructor(private produtoService : ProdutoService) { }


  ngOnInit(): void {
    this.produtoService.GetProdutos().subscribe((data) =>{
      const dados = data.dados;

      dados.map((item) => {
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR');
        item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR');
      })

      this.produtos = data.dados;
    })
  }
}
