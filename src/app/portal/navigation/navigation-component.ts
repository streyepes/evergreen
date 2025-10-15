import { Component, inject } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { UserProfileService } from "../../services/user-profile-service";
import { Router, RouterOutlet } from "@angular/router";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation-component.html',
    styles: ['mat-sidenav-container{height: 100%;}'], // TODO fix scrollbar
    imports: [
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        RouterOutlet
    ]
})
export class NavigationComponent {
    private userProfileService = inject(UserProfileService);
    private router = inject(Router);
}
