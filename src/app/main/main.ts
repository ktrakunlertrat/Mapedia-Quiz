import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.html',
  styleUrls: ['./main.css']
})
export class Main {
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