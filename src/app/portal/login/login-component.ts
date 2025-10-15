import { Component, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { UserProfileService } from "../../services/user-profile-service";

@Component({
    selector: 'app-login',
    templateUrl: './login-component.html',
    styleUrl: './login-component.css',
    imports: [
        FormsModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatTooltipModule
    ]
})
export class LoginComponent {
    email: string = '';
    errorMessage = signal('');
    newUser = signal(false);
    private userProfileService = inject(UserProfileService);

    searchUser(proceed?: boolean | null) {
        if (!proceed) return;

        if (!this.userProfileService.loadUserProfile(this.email))
            this.newUser.set(true);
    }

    resetFlags() {
        if (this.newUser()) this.newUser.set(false);
    }

    createUserProfile() {
        this.userProfileService.createUserProfile(this.email);
    }
}
