import { Component } from '@angular/core';
import { Fournisseur } from '../Models/fournisseur';

@Component({
  selector: 'app-listfournisseur',
  templateUrl: './listfournisseur.component.html',
  styleUrls: ['./listfournisseur.component.css'],
})
export class ListfournisseurComponent {
  list: Fournisseur[] = [
    { idFournisseur: 1, code: '1ABC4522', libelle: 'hp' },
    { idFournisseur: 2, code: '2ABC4522', libelle: 'dell' },
    { idFournisseur: 3, code: '3ABC4522', libelle: 'lenovo' },
    { idFournisseur: 400, code: '40ABC452', libelle: 'asus' },
  ];
  getColor(id: string): boolean {
    return id.startsWith('2A');
  }
  delete(index: number) {
    this.list.splice(index, 1);
  }
}
