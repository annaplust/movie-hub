import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClapperboard, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule, ToggleSwitchModule, FormsModule, InputTextModule, ButtonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  searchPhraseChange = output<string>();

  // Icons
  faClapperboard = faClapperboard;
  faMagnifyingGlass = faMagnifyingGlass;
  faXmark = faXmark;

  searchPhrase = '';

  isDarkMode = false;

  onThemeChange() {
    if (this.isDarkMode) {
      const element = document.querySelector('html');
      if (element) {
        element.classList.add('dark-theme');
      }
    } else {
      const element = document.querySelector('html');
      if (element) {
        element.classList.remove('dark-theme');
      }
    }
  }

  onSearch() {
    this.searchPhraseChange.emit(this.searchPhrase);
  }

  onClearSearchPhrase() {
    this.searchPhrase = '';
    this.onSearch();
  }
}
