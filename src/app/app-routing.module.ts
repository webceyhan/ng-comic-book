import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersPageComponent } from './characters/characters-page/characters-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/characters', pathMatch: 'full' },
    { path: 'characters', component: CharactersPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
