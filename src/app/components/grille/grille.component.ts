import { Component, Input } from '@angular/core';
import { SelectionService } from '../../services/selection.service';

@Component({
  selector: 'app-grille',
  templateUrl: './grille.component.html',
  styleUrl: './grille.component.css'
})
export class GrilleComponent {
  selectedLetters: string | null = null;

  constructor(private selectionService: SelectionService){}

  ngOnInit(): void{
    this.selectionService.selectedLetters$.subscribe(letter => {
      this.selectedLetters = letter;
    })
  }

}
