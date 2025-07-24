// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Header } from "./header/header";
// import { Sidebar } from "./sidebar/sidebar";
// import { Main } from "./main/main";

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [Header, Sidebar, Main, RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('my-project');
// }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class App {}