import { NgModule } from '@angular/core';

import { SharedModule } from 'shared/shared.module';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharactersPageComponent } from './characters-page/characters-page.component';
import { CharacterDetailPageComponent } from './character-detail-page/character-detail-page.component';
import { CharacterEditPageComponent } from './character-edit-page/character-edit-page.component';

@NgModule({
    declarations: [
        CharacterCardComponent,
        CharactersPageComponent,
        CharacterDetailPageComponent,
        CharacterEditPageComponent,
    ],
    imports: [SharedModule, CharactersRoutingModule],
})
export class CharactersModule {}
