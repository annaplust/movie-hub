import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Language, LanguageService } from '@core/services/language.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faClapperboard, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { SearchInputComponent } from '../search-input/search-input.component';

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
    SearchInputComponent,
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
  faBars = faBars;

  // Form values
  searchPhrase = '';
  selectedLanguage = this.languages.find((l) => l.code === this.languageService.currentLanguage()) ?? this.languages[0];

  isDarkMode = false;
  isMobileMenuOpen = signal(false);

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

  toggleMobileMenu() {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
}
