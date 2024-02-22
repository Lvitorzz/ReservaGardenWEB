import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { EditarComponent } from './pages/editar/editar.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: 'cadastro' , component: CadastroComponent, canActivate: [AuthGuard]},
  {path: 'home' , component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'editar/:id', component: EditarComponent, canActivate: [AuthGuard]},
  {path: 'detalhes/:id', component: DetalhesComponent, canActivate: [AuthGuard]},
  {path: '', component: CatalogoComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
