import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersPageComponent } from './characters/characters-page/characters-page.component';
import { CharacterPageComponent } from './characters/character-page/character-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/characters', pathMatch: 'full' },
    { path: 'characters/:id', component: CharacterPageComponent },
    { path: 'characters', component: CharactersPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
