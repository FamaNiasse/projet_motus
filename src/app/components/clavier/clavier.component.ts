import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectionService } from '../../services/selection.service';

@Component({
  selector: 'app-clavier',
  templateUrl: './clavier.component.html',
  styleUrl: './clavier.component.css'
})
export class ClavierComponent {
  @Output() letterSelected = new EventEmitter<string>();
  @Input() content: string = '';

  constructor(private selectionService: SelectionService){}

  ngOnInit() {}

  selectLetter(): void {
    this.selectionService.setLetter(this.content);
    this.letterSelected.emit(this.content);
  }
}
