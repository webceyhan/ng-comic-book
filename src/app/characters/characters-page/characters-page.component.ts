import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Character } from 'shared/models/character';
import { CharacterService } from 'shared/services/character.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { switchMap, tap, map } from 'rxjs/operators';

@Component({
    selector: 'app-characters-page',
    templateUrl: './characters-page.component.html',
    styleUrls: ['./characters-page.component.css'],
})
export class CharactersPageComponent implements OnInit {
    characters$: Observable<Character[]>;

    filterForm: FormGroup;
    filters$ = new BehaviorSubject<any>({});

    readonly alignmentOptions = ['hero', 'villain', 'other'];

    constructor(
        private fb: FormBuilder,
        private characterSvc: CharacterService
    ) {}

    ngOnInit(): void {
        this.filterForm = this.fb.group({
            alignment: this.fb.group({
                hero: [false],
                villain: [false],
                other: [false],
            }),
        });

        this.filterForm.valueChanges.subscribe((values) => {
            this.filters$.next(values);
        });

        this.characters$ = this.filters$.pipe(
            map((filters) => filters || {}),
            map((filters) => {
                const alignment = Object.entries(filters.alignment || {})
                    .filter(([k, v]) => !!v)
                    .map(([k, v]) => k);

                return { alignment };
            }),

            switchMap((filters) => {
                return this.characterSvc.list((ref) => {
                    if (filters.alignment.length > 0) {
                        return ref.where('alignment', 'in', filters.alignment);
                    }

                    return ref;
                });
            })
        );
    }
}
