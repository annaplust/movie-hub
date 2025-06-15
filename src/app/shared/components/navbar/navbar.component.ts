import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClapperboard, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SelectModule } from 'primeng/select';
import { Language, LanguageService } from '@core/services/language.service';

@Component({
  selector: 'app-navbar',
  imports: [
    FontAwesomeModule,
    ToggleSwitchModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    IconFieldModule,
    InputIconModule,
    ButtonModule,
    SelectModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  searchPhraseChange = output<string>();
  private languageService = inject(LanguageService);

  readonly languages: { name: string; code: Language }[] = [
    { name: 'EN', code: 'en-US' },
    { name: 'PL', code: 'pl-PL' },
  ];

  // Icons
  faClapperboard = faClapperboard;
  faMagnifyingGlass = faMagnifyingGlass;
  faXmark = faXmark;

  // Form values
  searchPhrase = '';
  selectedLanguage = this.languages.find((l) => l.code === this.languageService.currentLanguage()) ?? this.languages[0];

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

  onLanguageChange() {
    this.languageService.changeLanguage(this.selectedLanguage.code);
  }
}
