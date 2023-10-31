import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { ListfournisseurComponent } from './listfournisseur/listfournisseur.component';
import { ListproduitsComponent } from './listproduits/listproduits.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { HomeComponent } from './home/home.component';

import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    MyDirectiveDirective,
    ListfournisseurComponent,
    ListproduitsComponent,
    FournisseurComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
