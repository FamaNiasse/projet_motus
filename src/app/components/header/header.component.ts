import { Component } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userName: string = '';

  constructor(private userDataService: UserDataService, private modalService: ModalService){}

  openModal() {
    this.modalService.openModal();
    console.log("la modal est ouverte", this.openModal);
    

  }

  ngOnInit(): void{
    this.userName = this.userDataService.getUserName();
    this.userDataService.getUserNameSubject().subscribe((name) => {
      this.userName = name;

    });

    }
  }




