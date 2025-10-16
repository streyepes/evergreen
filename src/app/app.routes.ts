import { Routes } from '@angular/router';
import { PortalComponent } from './portal/portal-component';
import { AssetManagerComponent } from './applications/asset-manager/asset-manager-component';
import { HardwareBuilderComponent } from './applications/hardware-builder/hardware-builder-component';
import { TicketTrackerComponent } from './applications/ticket-tracker/ticket-tracker-component';
import { NotFoundComponent } from './portal/not-found/not-found-component';
import { AccountDetailsComponent } from './portal/account-details/account-details-component';
import { UnnavigatedComponent } from './portal/navigation/navigation-component';

export const routes: Routes = [
    {
        path: '',
        component: PortalComponent,
        children: [
            {
                path: '',
                component: UnnavigatedComponent
            },
            {
                path: 'account-details',
                component: AccountDetailsComponent
            },
            {
                path: 'asset-manager',
                component: AssetManagerComponent
            },
            {
                path: 'hardware-builder',
                component: HardwareBuilderComponent
            },
            {
                path: 'ticket-tracker',
                component: TicketTrackerComponent
            },
            {
                path: '**',
                component: NotFoundComponent
            }
        ]
    },
];
