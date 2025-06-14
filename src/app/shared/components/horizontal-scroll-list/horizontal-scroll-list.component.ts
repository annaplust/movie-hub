import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-horizontal-scroll-list',
  imports: [RouterLink],
  templateUrl: './horizontal-scroll-list.component.html',
  styleUrl: './horizontal-scroll-list.component.scss',
})
export class HorizontalScrollListComponent {
  items = input.required<any[]>();
  size = input<'sm' | 'md' | 'lg'>('md');
  route = input.required<string>();
  image = input<string | null>(null);
  header = input<string | null>(null);
  subheader = input<string | null>(null);
}
