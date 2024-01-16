import { Component } from '@angular/core';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrl: './input-name.component.css'
})
export class InputNameComponent {
prenom: string = '';

  enregistrerPrenom() {
    console.log('Prénom enregistré :', this.prenom);

  }

}
