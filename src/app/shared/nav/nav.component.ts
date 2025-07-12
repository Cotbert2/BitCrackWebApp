import { Component, EventEmitter, output, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  animations: [
    trigger('fadeScaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class NavComponent {
  @Output() toggleContactModal = new EventEmitter<void>();

  openContactModal() {
    this.toggleContactModal.emit();
  }

}
