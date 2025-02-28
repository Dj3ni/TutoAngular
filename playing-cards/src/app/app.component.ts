import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  imports:[PlayingCardComponent],
  templateUrl: './app.component.html', // lien vers feuille html
  styleUrl: './app.component.css' // lien vers feuille de style
})
export class AppComponent {
  title = 'playing-cards';
}
