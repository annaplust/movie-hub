import { computed, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Language = 'en-US' | 'pl-PL';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly languages: Language[] = ['en-US', 'pl-PL'];
  private _currentLanguage = signal<Language>(this.languages[0]);

  currentLanguage = computed(() => this._currentLanguage());

  constructor(private translate: TranslateService) {
    this.translate.addLangs(this.languages);
    this.translate.setDefaultLang(this.languages[0]);

    const savedLang = localStorage.getItem('lang') as Language;
    if (savedLang) {
      this.translate.use(savedLang);
      this._currentLanguage.set(savedLang);
    } else {
      const browserLang = this.translate.getBrowserLang() as Language;
      const lang = browserLang && this.languages.includes(browserLang) ? browserLang : this.languages[0];
      this.translate.use(lang);
      this._currentLanguage.set(lang);
    }
  }

  changeLanguage(lang: Language) {
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
    this._currentLanguage.set(lang);
  }
}
