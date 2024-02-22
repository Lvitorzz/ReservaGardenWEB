import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/Admin';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  adminForm!: FormGroup;
  mensagemErro: string = '';
  constructor(private loginService : LoginService, private router: Router, private authService : AuthService) {  }

  ngOnInit(): void {
    this.adminForm = new FormGroup({
      Id: new FormControl(0),
      NomeUsuario: new FormControl(''),
      Senha: new FormControl('')
    });
  }

  AutenticarUsuario(): void {
    if (this.adminForm.valid) {
      const admin: Admin = this.adminForm.value as Admin;
      console.log(admin);
      this.loginService.AutenticarUsuario(admin).subscribe(
        (resposta) => {
          if (resposta.mensagem == "Autenticação bem-sucedida."){
            this.authService.login();
            this.router.navigate(['home']);
          }else if (resposta.mensagem == "Usuário não encontrado."){
            this.mensagemErro = 'Usuário ou senha inválido';
            this.adminForm.reset();
          }
        },
        (erro) => {
          console.error('Erro durante o login', erro);
        }
      );
    }
  }

}
