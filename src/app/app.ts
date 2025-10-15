import { Component, HostListener, OnInit, signal } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  imports: [RouterOutlet]
})
export class App implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:beforeunload', ['$event'])
  onClose(event: BeforeUnloadEvent) {
    // TODO final save here
  }
}
