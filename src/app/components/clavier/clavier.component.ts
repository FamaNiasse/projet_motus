import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clavier',
  templateUrl: './clavier.component.html',
  styleUrl: './clavier.component.css'
})
export class ClavierComponent {
  @Input() content: string = '';
  imageSrc: string = '';

  ngOnInit() {
    // Ajoutez le chemin de l'image en fonction de la lettre
    this.imageSrc = `assets/images/${this.content.toLowerCase()}.png`;
    console.log(this.imageSrc);
    
  }
}
