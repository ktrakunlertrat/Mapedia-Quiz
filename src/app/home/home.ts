import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, Sidebar, RouterOutlet, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  cards = Array.from({ length: 8 }, (_, i) => ({
    title: `images group`,
    img: 'imgicon.png'
  }));

  rows: number[] = [];

  constructor(private router: Router) {
    this.rows = Array.from({ length: 16 }, (_, index) => index + 5);
  }

  goToDetail() {
    this.router.navigate(['/detail']);
  }

  isGridView: boolean = false;

  toggleGridView(event: Event): void {
    event.preventDefault();
    this.isGridView = !this.isGridView;
  }
}
