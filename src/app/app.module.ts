import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ProdutoFormComponent } from './componentes/produto-form/produto-form.component';
import { EditarComponent } from './pages/editar/editar.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './pages/login/login.component';
import { MatMenuModule } from '@angular/material/menu';
import { NavComponent } from './componentes/nav/nav.component';
import { FilterByMoradorPipe } from './pages/catalogo/filter-by-morador.pipe';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CadastroComponent,
        ProdutoFormComponent,
        EditarComponent,
        DetalhesComponent,
        CatalogoComponent,
        LoginComponent,
        NavComponent,
        FilterByMoradorPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
        ModalModule.forRoot(),
        MatButtonModule,
        MatMenuModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
