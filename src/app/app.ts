import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { Sidebar } from "./sidebar/sidebar";
import { Main } from "./main/main";

@Component({
  selector: 'app-root',
  imports: [Header, Sidebar, Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-project');
}
