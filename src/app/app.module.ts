import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { ListfournisseurComponent } from './listfournisseur/listfournisseur.component';
import { ListproduitsComponent } from './listproduits/listproduits.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ListUserComponentComponent, MyDirectiveDirective, ListfournisseurComponent, ListproduitsComponent, FournisseurComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
