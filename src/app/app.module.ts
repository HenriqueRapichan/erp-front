import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule, NgbPaginationModule, NgbAlertModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TabelaComponent } from './components/tabela/tabela.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './models/home/home.component';
import { PessoasComponent } from './models/pessoas/pessoas.component';
@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,
    MenuComponent,
    HomeComponent,
    PessoasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbDropdownModule, 
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
  ],
  exports: [
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'pt-PT' }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
