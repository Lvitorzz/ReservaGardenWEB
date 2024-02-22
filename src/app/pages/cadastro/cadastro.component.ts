import { Component } from '@angular/core';
import { Produto } from '../../models/Produtos';
import { ProdutoService } from '../../services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  btnTitulo = "Cadastrar Produto";
  btnAcao = "Cadastrar";
  

  constructor(private produtoService : ProdutoService, private router: Router) {  }

  createProduto(produto: Produto){
    this.produtoService.CreateProduto(produto).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}
