import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { ShowcaseComponent } from './showcase/showcase.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent, pathMatch: 'full' },
    { path: 'about', component: AboutComponent, pathMatch: 'full'},
    { path: 'projects', component: ShowcaseComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
