import { NgModule } from '@angular/core';

import { SharedModule } from 'shared/shared.module';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharactersPageComponent } from './characters-page/characters-page.component';
import { CharacterPageComponent } from './character-page/character-page.component';

@NgModule({
    declarations: [
        CharacterCardComponent,
        CharactersPageComponent,
        CharacterPageComponent,
    ],
    imports: [SharedModule, CharactersRoutingModule],
})
export class CharactersModule {}