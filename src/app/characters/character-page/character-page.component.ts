import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Character } from 'shared/models/character';

@Component({
    selector: 'app-character-page',
    templateUrl: './character-page.component.html',
    styleUrls: ['./character-page.component.css'],
})
export class CharacterPageComponent implements OnInit {
    character: Character;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.character = this.route.snapshot.data.character;
    }
}
