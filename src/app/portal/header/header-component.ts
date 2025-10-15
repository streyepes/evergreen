import { Component, inject, input } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { UserProfileService } from "../../services/user-profile-service";

@Component({
    selector: 'app-header',
    templateUrl: './header-component.html',
    styleUrl: './header-component.css',
    imports: [
        MatToolbarModule,
    ]
})
export class HeaderComponent {
    email = input('');
    title = input('');
    version = input('');

    userProfileService = inject(UserProfileService);

    logout() {
        this.userProfileService.unloadUserProfile(true);
    }
}
