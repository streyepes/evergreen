import * as Metadata from "../../metadata.json";
import { AfterViewInit, Component, inject, OnInit } from "@angular/core";
import { HeaderComponent } from "./header/header-component";
import { NavigationComponent } from "./navigation/navigation-component";
import { UserProfileService } from "../services/user-profile-service";
import { LoginComponent } from "./login/login-component";
import { AccountDetailsComponent } from "./account-details/account-details-component";
import { MatDialog } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";
import { PortalApp } from '../interfaces/portal-app'

@Component({
    selector: 'app-portal',
    templateUrl: './portal-component.html',
    imports: [
        LoginComponent,
        HeaderComponent,
        NavigationComponent,
    ]
})
export class PortalComponent implements OnInit, AfterViewInit {
    readonly title = Metadata.title;
    readonly versionInfo = `${Metadata.version} (${Metadata.lastModified})`;
    readonly accountDialog = inject(MatDialog)
    readonly userProfileService = inject(UserProfileService)
    readonly http = inject(HttpClient);

    appsList: PortalApp[] = [];

    // TODO pull apps using HttpClient to better simulate API
    ngOnInit(): void {
        this.http.get('api/portal/applicationsList.json').subscribe(result => {
            console.log(result);
        })
    }

    ngAfterViewInit(): void {
        const headerHeight = document.getElementById('header')?.offsetHeight;
        const container = document.getElementById('nav-container');
        container?.setAttribute('style', `height: calc(100vh - ${headerHeight}px)`);
    }

    openAccountDetails() {
        const dialogRef = this.accountDialog.open(AccountDetailsComponent);

        dialogRef.afterClosed().subscribe(() => {});
    }
}
