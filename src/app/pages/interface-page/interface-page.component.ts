import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-interface-page',
  templateUrl: './interface-page.component.html',
  styleUrl: './interface-page.component.css'
})
export class InterfacePageComponent {
  blocks: any[] = Array.from({ length: 48 }, (_, index) => index + 1);
  alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  selectedLetters: string[] = [];

  handleLetterSelection(selectedLetter: string): void {
    this.selectedLetters.push(selectedLetter);
    console.log('Lettres sélectionnées:', this.selectedLetters);
  }

  deleteSelection(){}

  validateSelection(){}


}
