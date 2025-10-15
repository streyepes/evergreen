import * as Metadata from "../../metadata.json";

import { Component, inject } from "@angular/core";
import { HeaderComponent } from "./header/header-component";
import { NavigationComponent } from "./navigation/navigation-component";
import { UserProfileService } from "../services/user-profile-service";
import { LoginComponent } from "./login/login-component";

@Component({
    selector: 'app-portal',
    templateUrl: './portal-component.html',
    imports: [
        LoginComponent,
        HeaderComponent,
        NavigationComponent,
    ]
})
export class PortalComponent {
    readonly title = Metadata.title;
    readonly versionInfo = `${Metadata.version} (${Metadata.lastModified})`;
    
    userProfileService = inject(UserProfileService)

    // TODO pull apps using HttpClient to better simulate API
}
