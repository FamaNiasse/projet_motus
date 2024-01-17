import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  private userName: string = '';
  private userNameSubject = new Subject<string>();

  getUserName(): string {
    return this.userName;
  }

  setUserName(name: string): void {
    this.userName = name;
  }

  getUserNameSubject(): Subject<string>{
    return this.userNameSubject;

  }

}
