import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterPageComponent } from './character-page/character-page.component';
import { CharactersPageComponent } from './characters-page/characters-page.component';
import { CharacterResolver } from 'shared/resolvers/character.resolver';

const routes: Routes = [
    {
        path: 'characters/:id',
        component: CharacterPageComponent,
        resolve: { character: CharacterResolver },
    },
    { path: 'characters', component: CharactersPageComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CharactersRoutingModule {}
