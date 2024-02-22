import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../../models/Produtos';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Produto>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosProduto: Produto | null = null;

  produtoForm!: FormGroup;

  constructor() {  }

  ngOnInit(): void {

    this.produtoForm = new FormGroup({
      id: new FormControl(this.dadosProduto ? this.dadosProduto.id : 0),
      nome: new FormControl(this.dadosProduto ? this.dadosProduto.nome : '', [Validators.required]),
      descricao: new FormControl(this.dadosProduto ? this.dadosProduto.descricao :'', [Validators.required]),
      link: new FormControl(this.dadosProduto ? this.dadosProduto.link :'', [Validators.required]),
      urlImagem: new FormControl(this.dadosProduto ? this.dadosProduto.urlImagem :'', [Validators.required]),
      ativo: new FormControl(this.dadosProduto ? this.dadosProduto.ativo : true),
      preco: new FormControl(this.dadosProduto ? this.dadosProduto.preco :'', [Validators.required]),
      categoria: new FormControl(this.dadosProduto ? this.dadosProduto.categoria :'', [Validators.required]),
      quantidade: new FormControl(this.dadosProduto ? this.dadosProduto.quantidade :'', [Validators.required]),
      dataDeCriacao: new FormControl(new Date()),
      dataDeAlteracao: new FormControl(new Date())
    });
  }

  submit(){
    this.onSubmit.emit(this.produtoForm.value);
  }

}
