import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { UMeditorModule } from 'ngx-umeditor';
import { SettingsPageComponent } from './settings/settings';
import { MenusPageComponent } from './menus/menus';
import { ApiModule } from 'generated';

const routes: Routes = [
    { path: 'settings', component: SettingsPageComponent },
    { path: 'menus', component: MenusPageComponent },

];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        UMeditorModule,
    ],
    declarations: [
        SettingsPageComponent,
        MenusPageComponent
    ],
    entryComponents: [
        SettingsPageComponent,
        MenusPageComponent
    ],
    exports: [
        RouterModule
    ]
})

export class SystemModule { }

async function sleep(msec: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, msec);
    });
}
