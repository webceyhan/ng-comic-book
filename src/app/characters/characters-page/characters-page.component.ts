import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Character } from 'shared/models/character';
import { CharacterService } from 'shared/services/character.service';

@Component({
    selector: 'app-characters-page',
    templateUrl: './characters-page.component.html',
    styleUrls: ['./characters-page.component.css'],
})
export class CharactersPageComponent implements OnInit {
    characters$: Observable<Character[]>;

    constructor(private characterSvc: CharacterService) {}

    ngOnInit(): void {
        this.characters$ = this.characterSvc.list();
    }
}
