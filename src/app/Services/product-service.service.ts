import { Injectable } from '@angular/core';
import { Produit } from '../Models/produit';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  Products: Produit[] = [
    { id: 1, code: 127, libelle: 'PC', prixunitaire: 2000, tauxTva: 10 },
    { id: 2, code: 128, libelle: 'TV', prixunitaire: 1000, tauxTva: 20 },
    { id: 3, code: 128, libelle: 'Table', prixunitaire: 200, tauxTva: 30 },
  ];

  constructor() {}

  getAllProducts(): Produit[] {
    return this.Products;
  }
  getNbProductsByLibelle(libell: string) {
    return this.Products.filter((p) => p.libelle === libell).length;
  }
}
