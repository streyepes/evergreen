import { Component, inject } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { UserProfileService } from "../services/user-profile-service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation-component.html',
    styles: [],
    imports: [MatSidenavModule]
})
export class NavigationComponent {
    private userProfileService = inject(UserProfileService);
    private router = inject(Router);
    
    logout() {
        this.userProfileService.unloadUserProfile(true);
        this.router.navigate(['']);
    }
}