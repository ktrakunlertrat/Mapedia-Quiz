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

  constructor(private router: Router) {}

  goToDetail() {
    this.router.navigate(['/detail']);
  }
}