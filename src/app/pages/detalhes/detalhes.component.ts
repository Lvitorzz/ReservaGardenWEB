import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../models/Produtos';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  produto? : Produto;
  id! : number;

  constructor(private produtoService : ProdutoService, private route : ActivatedRoute, private router : Router) {  }
  
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.produtoService.GetProduto(this.id).subscribe((data) =>{
      const dados = data.dados;

      dados.dataDeCriacao = new Date(dados.dataDeCriacao!).toLocaleDateString('pt-BR');
      dados.dataDeAlteracao = new Date(dados.dataDeAlteracao!).toLocaleDateString('pt-BR');
      this.produto = data.dados;
    });
  }

  InativaProduto(){
    this.produtoService.InativaProduto(this.id).subscribe((data) =>{
      this.router.navigate(['']);
    })
  }
}
