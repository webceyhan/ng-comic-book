import { Component, OnInit } from '@angular/core';
import { Query } from '@angular/fire/firestore/interfaces';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Character } from 'shared/models/character';
import { CharacterService } from 'shared/services/character.service';

@Component({
    selector: 'app-characters-page',
    templateUrl: './characters-page.component.html',
    styleUrls: ['./characters-page.component.css'],
})
export class CharactersPageComponent implements OnInit {
    query$ = new BehaviorSubject(undefined);
    characters$: Observable<Character[]>;

    constructor(private characterSvc: CharacterService) {}

    ngOnInit(): void {
        this.characters$ = this.query$.pipe(
            switchMap((query) => this.characterSvc.list(query))
        );
    }

    onFilter(filters) {
        this.query$.next((q: Query) => {
            if (filters.gender) {
                q = q.where('gender', '==', filters.gender);
            }

            if (filters.alignment.length > 0) {
                q = q.where('alignment', 'in', filters.alignment);
            }

            return q;
        });
    }
}
