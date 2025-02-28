import { Component, EventEmitter, input, Input, model, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  imports: [FormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  //Ancienne notation
  //@Input() search: string = 'Initial';
  //Nouvelle notation
  //search = input<string>('Initial');
  //Utilisation de model
  search = model<string>('Initial')

  // Permet de notifier de l'évènement aux parents
  @Output()
  public searchButtonClicked = new EventEmitter();

  public searchClick(){
    this.searchButtonClicked.emit();
  }

  // Notification de changements ds barre de recherche
  //Ancienne notation
  // @Output() searchChange = new EventEmitter<string>();
  //Nouvelle notation devenue inutile si on utilise model car créé par model
  //public searchChange = output<string>()


  public updateSearch(value :string){
    //this.searchChange.emit(value);
    this.search.set(value);
  }
}
