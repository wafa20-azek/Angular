import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListfournisseurComponent } from './listfournisseur/listfournisseur.component';
import { ListproduitsComponent } from './listproduits/listproduits.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'listfournisseur', component: ListfournisseurComponent },
  { path: 'listproduits', component: ListproduitsComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
