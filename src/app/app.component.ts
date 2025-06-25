import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DividerModule } from 'primeng/divider';
import { Language, LanguageService } from '@core/services/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, DividerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private router = inject(Router);
  title = 'MHDB';

  onSearch(phrase: string) {
    this.router.navigate(['/search', phrase]);
  }
}
