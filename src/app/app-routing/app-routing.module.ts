import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { ProdutoComponent } from '../pages/produto/produto.component';
import { LoginComponent } from '../pages/login/login.component';
import { CatalagoComponent } from '../pages/catalogo/catalago.component';
import { AddProdutoComponent } from '../pages/add-produto/add-produto.component';
 
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'produto', component: ProdutoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'catalogo', component: CatalagoComponent},
  {path: 'cadastrar-produto', component: AddProdutoComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
