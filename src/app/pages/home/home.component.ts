import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/Produtos';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos: Produto[] = [];
  produtosGeral: Produto[] = [];

  constructor(private produtoService: ProdutoService, private authService : AuthService, private router: Router){}

  ngOnInit(): void { 
    this.produtoService.GetProdutos().subscribe(data => {
      const dados = data.dados;

      dados.map((item) => {
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR');
        item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR');
      })

      this.produtos = data.dados;
      this.produtosGeral = data.dados;
    });

  }

  serach(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLocaleLowerCase();

    this.produtos = this.produtosGeral.filter(produto => {
      return produto.nome.toLocaleLowerCase().includes(value);
    })
  }

  Logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }
}
