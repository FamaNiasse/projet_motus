import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
private selectedLetterSubject = new BehaviorSubject<string | null> (null);
selectedLetters$ = this.selectedLetterSubject.asObservable();
  
setLetter(letter: string): void {
  this.selectedLetterSubject.next(letter);
}

clearSelection(): void{
  this.selectedLetterSubject.next(null);
}

}
