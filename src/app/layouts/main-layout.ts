import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { Main } from "../main/main";

@Component({
  selector: 'main-layout',
  standalone: true,
  imports: [Header, Sidebar, Main, RouterOutlet],
  template: `
    <app-header></app-header>
    <div class="flex p-2">
        <app-sidebar></app-sidebar>
        <app-main class="flex-1"></app-main>
    </div>
    <router-outlet></router-outlet>
  `
})
export class MainLayout {}