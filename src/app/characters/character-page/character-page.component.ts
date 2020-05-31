import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Character } from 'shared/models/character';

@Component({
    selector: 'app-character-page',
    templateUrl: './character-page.component.html',
    styleUrls: ['./character-page.component.css'],
})
export class CharacterPageComponent implements OnInit {
    character$: Observable<Character>;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.character$ = this.route.data.pipe(map((data) => data.character));
    }
}
