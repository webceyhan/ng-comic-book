import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Character } from 'shared/models/character';

@Component({
    selector: 'app-character-detail-page',
    templateUrl: './character-detail-page.component.html',
    styleUrls: ['./character-detail-page.component.css'],
})
export class CharacterDetailPageComponent implements OnInit {
    character: Character;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.character = this.route.snapshot.data.character;
    }
}
