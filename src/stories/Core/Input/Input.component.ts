import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './Input.component.ts',
  styleUrls: ['./Input.component.css']
})
export class InputComponent {
   @Input() type: string | undefined;
}
