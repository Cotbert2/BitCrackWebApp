import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./features/home/home.component";
import { NavComponent } from "./shared/nav/nav.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { ContactComponent } from "./features/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, NavComponent, FooterComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nombre-del-proyecto';
  showContactModal: boolean = false;
}
