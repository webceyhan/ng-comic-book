import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Character } from 'shared/models/character';
import { CharacterService } from 'shared/services/character.service';

@Component({
    selector: 'app-character-page',
    templateUrl: './character-page.component.html',
    styleUrls: ['./character-page.component.css'],
})
export class CharacterPageComponent implements OnInit {
    character$: Observable<Character>;

    constructor(
        private route: ActivatedRoute,
        private characterSvc: CharacterService
    ) {}

    ngOnInit(): void {
        this.character$ = this.route.data.pipe(map((data) => data.character));
    }

    onSave(character: Character): void {
        this.characterSvc.save(character);
    }

    onEditCancel() {
        console.log('cancel');
    }
}
