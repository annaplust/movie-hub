import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, DividerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private router = inject(Router);
  title = 'movie-hub';

  onSearch(phrase: string) {
    this.router.navigate(['/search', phrase]);
  }
}
