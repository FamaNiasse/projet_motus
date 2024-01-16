import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-interface-page',
  templateUrl: './interface-page.component.html',
  styleUrl: './interface-page.component.css'
})
export class InterfacePageComponent {
  blocks: any[] = Array.from({ length: 48 }, (_, index) => index + 1);
  alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
}
