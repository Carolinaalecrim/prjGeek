import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { CatalagoComponent } from './pages/catalogo/catalago.component';
import { AddProdutoComponent } from './pages/add-produto/add-produto.component';
import { CaixinhaComponent } from './caixinha/caixinha.component';
import { CaixinhaEdicaoComponent } from './caixinha-edicao/caixinha-edicao.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ProdutoComponent,
    CatalagoComponent,
    AddProdutoComponent,
    CaixinhaComponent,
    CaixinhaEdicaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
