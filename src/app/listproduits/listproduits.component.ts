import { Component } from '@angular/core';
import { Produit } from '../Models/produit';
import { ProductServiceService } from '../Services/product-service.service';

@Component({
  selector: 'app-listproduits',
  templateUrl: './listproduits.component.html',
  styleUrls: ['./listproduits.component.css'],
})
export class ListproduitsComponent {
  list: Produit[] = [];
  ListProduct: Produit[] = [];
  c = false;

  constructor(private p: ProductServiceService) {}

  ngOnInit() {
    this.ListProduct = this.p.getAllProducts();
  }

  AjusterTVA(index: number) {
    this.list[index].tauxTva = 0.02;
    alert('TVA modifiée');
  }
  NbProductsByLibelle(libel: string) {
    alert(this.p.getNbProductsByLibelle(libel));
  }
}
