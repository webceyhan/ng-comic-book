import { Component, OnInit } from '@angular/core';

import { CharacterService } from './character.service';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
    characters = [];

    constructor(private characterSvc: CharacterService) {}

    ngOnInit(): void {
        this.characters = this.characterSvc.list();
    }
}
