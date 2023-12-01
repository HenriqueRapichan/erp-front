import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './models/home/home.component';
import { PessoasComponent } from './models/pessoas/pessoas.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'pessoas',
        component: PessoasComponent, 
      },
      // {
      //   path: 'cliente',
      //   component: ClienteComponent,
      // },
      // {
      //   path: 'pedidos',
      //   component: PedidosComponent,
      // },
      // {
      //   path: 'pedidosConsulta',
      //   component: PedidosConsultaComponent,
      // },
      // {
      //   path: 'financeiro',
      //   component: FinanceiroComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
