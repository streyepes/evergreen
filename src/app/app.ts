import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styles: ['.mat-h1 {text-align: center}'],
  imports: [RouterOutlet]
})
export class App implements OnInit {
  constructor() {}

  ngOnInit(): void {}
    // beforeunload 
}
