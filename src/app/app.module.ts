import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';

import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CharacterCardComponent } from './characters/character-card/character-card.component';
import { CharactersPageComponent } from './characters/characters-page/characters-page.component';
import { CharacterPageComponent } from './characters/character-page/character-page.component';

@NgModule({
    declarations: [
        AppComponent,
        CharacterCardComponent,
        CharactersPageComponent,
        CharacterPageComponent,
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        SharedModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
