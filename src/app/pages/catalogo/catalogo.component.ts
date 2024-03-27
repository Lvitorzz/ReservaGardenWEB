import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/Produtos';
import { ProdutoService } from '../../services/produto.service';
import { Morador } from 'src/app/models/Morador';
import { MoradorService } from 'src/app/services/morador.service';
import { MoradorProdutoService } from 'src/app/services/morador-produto.service';
import { MoradorProduto } from 'src/app/models/moradorProduto';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit{
  produtos: Produto[] = [];
  moradores: Morador[] = [];
  produtosMorador: MoradorProduto[] = [];
  dataAtual: Date = new Date();

  constructor(private produtoService : ProdutoService, private moradorService : MoradorService, private moradorProdutoService : MoradorProdutoService) { }


  ngOnInit(): void {
    //dados dos produtos
    this.produtoService.GetProdutos().subscribe((data) =>{
      const dados = data.dados;

      dados.map((item) => {
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR');
        item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR');
      })

      this.produtos = data.dados;
    });

    //dados dos moradores
    this.moradorService.GetMoradores().subscribe((data) => {
      const dados = data.dados;

      dados.map((item) => {
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR');
        item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR');
      })

      this.moradores = data.dados;
      console.log(this.moradores);
    });

    //dados dos produtos de cada morador
    this.moradorProdutoService.getMoradorProdutos().subscribe((data) => {
      this.produtosMorador = data.dados.map((item: MoradorProduto) => {
        const produto = this.produtos.find(p => p.id === item.produtoId);
        const morador = this.moradores.find(m => m.id === item.moradorId);
        console.log(this.produtosMorador);
        return {
          id: item.id,
          moradorId: item.moradorId,
          produtoId: item.produtoId,
          nomeMorador: morador ? morador.nomeMorador : '',
          nomeProduto: produto ? produto.nome : '',
        };
      });console.log(this.produtosMorador);
    });
  }
}
