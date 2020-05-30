import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { CharacterService } from 'shared/services/character.service';
import { Character } from 'shared/models/character';

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
        this.character$ = this.route.params.pipe(
            map((params) => params.id),
            switchMap((id) => this.characterSvc.get(id))
        );
    }
}
