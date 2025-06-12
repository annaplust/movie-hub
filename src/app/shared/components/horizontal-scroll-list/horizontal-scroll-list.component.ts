import { Component, input } from '@angular/core';
import { ScrollItem } from './scroll-item.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-horizontal-scroll-list',
  imports: [RouterLink],
  templateUrl: './horizontal-scroll-list.component.html',
  styleUrl: './horizontal-scroll-list.component.scss',
})
export class HorizontalScrollListComponent {
  items = input.required<ScrollItem[]>();
}
