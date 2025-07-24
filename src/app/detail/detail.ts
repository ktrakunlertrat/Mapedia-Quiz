import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [Header, Sidebar, RouterOutlet, CommonModule],
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export class Detail {
  cards = Array.from({ length: 12 }, (_, i) => ({
    image: 'topview.png',
    fileName: `DJI_${(601 + i).toString().padStart(4, '0')}.JPG`,
    icon1: 'imgicon2.png',
    icon2: 'dot3-1.png'
  }));
}
