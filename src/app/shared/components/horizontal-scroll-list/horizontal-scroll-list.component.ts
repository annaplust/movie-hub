import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-horizontal-scroll-list',
  imports: [RouterLink, SkeletonModule],
  templateUrl: './horizontal-scroll-list.component.html',
  styleUrl: './horizontal-scroll-list.component.scss',
})
export class HorizontalScrollListComponent {
  items = input.required<any[]>();
  size = input<'sm' | 'md' | 'lg'>('md');
  route = input<string>();
  image = input<string | null>(null);
  header = input<string | null>(null);
  subheader = input<string | null>(null);
  loading = input<boolean>(true);

  skeletonArray = Array(10);
}
