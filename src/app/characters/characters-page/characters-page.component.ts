import { Component, OnInit } from '@angular/core';
import { Query, QueryFn } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { Character } from 'shared/models/character';
import { CharacterService } from 'shared/services/character.service';
import { Item } from 'shared/models/item';

interface QueryParams {
    sort?: { field: string; direction?: string };
    gender?: string;
    alignment?: string[];
}

@Component({
    selector: 'app-characters-page',
    templateUrl: './characters-page.component.html',
    styleUrls: ['./characters-page.component.css'],
})
export class CharactersPageComponent implements OnInit {
    queryParams$ = new BehaviorSubject<QueryParams>({});
    characters$: Observable<Character[]>;

    sortMenu: Item[] = [
        { label: 'A-Z', value: 'name:asc' },
        { label: 'Z-A', value: 'name:desc' },
        { label: 'Newest to Oldest', value: 'createdAt:asc' },
        { label: 'Oldest to Newest', value: 'createdAt:desc' },
    ];

    constructor(private characterSvc: CharacterService) {}

    ngOnInit(): void {
        this.characters$ = this.queryParams$.pipe(
            map((params) => this.buildQuery(params)),
            switchMap((query) => this.characterSvc.list(query))
        );
    }

    onFilter(filters) {
        this.queryParams$.next({
            ...this.queryParams$.value,
            ...filters,
        });
    }

    onSort(item: Item) {
        const value = item.value as string;
        const [field, direction] = value.split(':');

        this.queryParams$.next({
            ...this.queryParams$.value,
            sort: { field, direction },
        });
    }

    buildQuery(params: QueryParams): QueryFn {
        return (q: Query) => {
            if (params.gender) {
                q = q.where('gender', '==', params.gender);
            }

            if (params.alignment?.length > 0) {
                q = q.where('alignment', 'in', params.alignment);
            }

            const { field, direction } = params?.sort || {};
            q = q.orderBy(field || 'name', direction || 'asc' as any);

            return q;
        };
    }
}
