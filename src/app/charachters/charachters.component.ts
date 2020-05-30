import { Component, OnInit } from '@angular/core';

import { CharacterService } from './character.service';

@Component({
    selector: 'app-charachters',
    templateUrl: './charachters.component.html',
    styleUrls: ['./charachters.component.css'],
})
export class CharachtersComponent implements OnInit {
    characters = [];

    constructor(private characterSvc: CharacterService) {}

    ngOnInit(): void {
        this.characters = this.characterSvc.list();
    }
}
