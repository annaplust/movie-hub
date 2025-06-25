import { TestBed } from '@angular/core/testing';
import { LanguageService, Language } from './language.service';
import { TranslateService } from '@ngx-translate/core';

describe('LanguageService', () => {
  let service: LanguageService;
  let translateServiceSpy: jasmine.SpyObj<TranslateService>;

  const languages: Language[] = ['en-US', 'pl-PL'];

  beforeEach(() => {
    // Create a spy for TranslateService
    const spy = jasmine.createSpyObj('TranslateService', ['addLangs', 'setDefaultLang', 'use', 'getBrowserLang']);

    TestBed.configureTestingModule({
      providers: [LanguageService, { provide: TranslateService, useValue: spy }],
    });

    translateServiceSpy = TestBed.inject(TranslateService) as jasmine.SpyObj<TranslateService>;
  });

  afterEach(() => {
    localStorage.removeItem('lang');
  });

  it('should be created', () => {
    service = TestBed.inject(LanguageService);
    expect(service).toBeTruthy();
  });

  it('should add languages and set default language on construction', () => {
    translateServiceSpy.getBrowserLang.and.returnValue('en-US');

    service = TestBed.inject(LanguageService);

    expect(translateServiceSpy.addLangs).toHaveBeenCalledWith(languages);
    expect(translateServiceSpy.setDefaultLang).toHaveBeenCalledWith('en-US');
  });

  it('should use saved language from localStorage if available', () => {
    localStorage.setItem('lang', 'pl-PL');

    translateServiceSpy.getBrowserLang.and.returnValue('en-US');

    service = TestBed.inject(LanguageService);

    expect(translateServiceSpy.use).toHaveBeenCalledWith('pl-PL');
    expect(service.currentLanguage()).toBe('pl-PL');
  });

  it('should fallback to browser language if no saved language in localStorage', () => {
    localStorage.removeItem('lang');

    translateServiceSpy.getBrowserLang.and.returnValue('pl-PL');

    service = TestBed.inject(LanguageService);

    expect(translateServiceSpy.use).toHaveBeenCalledWith('pl-PL');
    expect(service.currentLanguage()).toBe('pl-PL');
  });

  it('should fallback to default language if browser language is not supported', () => {
    localStorage.removeItem('lang');

    translateServiceSpy.getBrowserLang.and.returnValue('fr-FR' as Language);

    service = TestBed.inject(LanguageService);

    expect(translateServiceSpy.use).toHaveBeenCalledWith('en-US');
    expect(service.currentLanguage()).toBe('en-US');
  });

  it('changeLanguage should update language, localStorage and call translate.use', () => {
    translateServiceSpy.getBrowserLang.and.returnValue('en-US');
    service = TestBed.inject(LanguageService);

    service.changeLanguage('pl-PL');

    expect(localStorage.getItem('lang')).toBe('pl-PL');
    expect(translateServiceSpy.use).toHaveBeenCalledWith('pl-PL');
    expect(service.currentLanguage()).toBe('pl-PL');
  });
});
