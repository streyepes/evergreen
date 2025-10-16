import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from "@angular/router";
import { UserProfileService } from './services/user-profile-service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  imports: [RouterOutlet]
})
export class App implements OnInit {
  readonly userProfileService = inject(UserProfileService)
  readonly router = inject(Router);

  constructor() {}

  ngOnInit(): void {
    if (!this.userProfileService.isLoggedIn) this.router.navigate(['']);
  }

  @HostListener('window:beforeunload', ['$event'])
  onClose(event: BeforeUnloadEvent) {
    // TODO final save here
  }
}
