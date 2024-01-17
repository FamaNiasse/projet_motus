import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  showModal: boolean = false;

  constructor(private modalService: ModalService){
    this.modalService.showModal$.subscribe((show) => {
      this.showModal = show;
    });
  }

  closeModal(): void{
    this.modalService.closeModal();
    console.log("modale fermée", this.closeModal);
    
  }

  openModal(): void{
    this.modalService.openModal();
    console.log("modale ouverte 2", this.openModal);
  }


}
