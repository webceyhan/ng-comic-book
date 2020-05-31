import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersPageComponent } from './characters-page/characters-page.component';
import { CharacterDetailPageComponent } from './character-detail-page/character-detail-page.component';
import { CharacterEditPageComponent } from './character-edit-page/character-edit-page.component';
import { CharacterResolver } from 'shared/resolvers/character.resolver';

const routes: Routes = [
    {
        path: 'characters',
        children: [
            {
                path: 'new',
                component: CharacterEditPageComponent,
            },
            {
                path: ':id/edit',
                component: CharacterEditPageComponent,
                resolve: { character: CharacterResolver },
            },
            {
                path: ':id',
                component: CharacterDetailPageComponent,
                resolve: { character: CharacterResolver },
            },
            {
                path: '',
                component: CharactersPageComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CharactersRoutingModule {}
