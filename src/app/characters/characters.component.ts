import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CharacterService } from './character.service';
import { Character } from './character';

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
