import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';


@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrl: './input-name.component.css'
})
export class InputNameComponent {
userName: string = '';

constructor(private userDataService: UserDataService, private router: Router) {}

  submitName(): void {
    this.userDataService.setUserName(this.userName);
    this.router.navigate(['/interface']);
  }

}
