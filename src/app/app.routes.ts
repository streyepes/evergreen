import { Routes } from '@angular/router';
import { LoginComponent } from './portal/login/login-component';
import { PortalComponent } from './portal/portal-component';

export const routes: Routes = [
    {
        path: '',
        component: PortalComponent,
        children: [
        ]
    },
    // TODO page not found
];
