import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CharacterService } from 'shared/services/character.service';
import { Character } from 'shared/models/character';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
    characters$: Observable<Character[]>;

    constructor(private characterSvc: CharacterService) {}

    ngOnInit(): void {
        this.characters$ = this.characterSvc.list();
    }
}
