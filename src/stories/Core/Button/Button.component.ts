// ButtonComponent.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './Button.component.html',
  styleUrls: ['./Button.component.css']
})
 class ButtonComponent {
  @Input() label: string = '';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() primary: boolean = false;

  get sizeClass(): string {
    return `size-${this.size}`;
  }
}
export { ButtonComponent }; // Ajoutez cette ligne si nécessaire
