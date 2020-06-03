import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { Character } from 'shared/models/character';
import { CharacterService } from 'shared/services/character.service';
import { Observable, of } from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    map,
    switchMap,
    tap,
    take,
} from 'rxjs/operators';

@Component({
    selector: 'app-character-edit-page',
    templateUrl: './character-edit-page.component.html',
    styleUrls: ['./character-edit-page.component.css'],
})
export class CharacterEditPageComponent implements OnInit {
    form: FormGroup;

    readonly genders = ['male', 'female'];
    readonly alignments = ['hero', 'villain', 'complicated'];

    powerList: string[] = [];

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private characterSvc: CharacterService
    ) {}

    get edit() {
        return !!this.form.value.id;
    }

    get powers() {
        return this.form.get('powers') as FormArray;
    }

    ngOnInit(): void {
        const character: Character = this.route.snapshot.data.character || {};

        this.form = this.fb.group({
            id: [character.id],
            alignment: [character.alignment || '', Validators.required],
            name: [character.name || '', Validators.required],
            alias: [character.alias || ''],
            imageURL: [character.imageURL || ''],
            gender: [character.gender || '', Validators.required],
            realName: [character.realName || ''],
            location: [character.location || ''],
            occupation: [character.occupation || ''],
            story: [character.story || '', Validators.required],
            powers: this.fb.array(character.powers || []),
        });

        // pre-fetch all powers into a list
        this.characterSvc
            .list()
            .pipe(
                take(1),
                map((list) => list.map((o) => o.powers || [])),
                // flatten all powers arrays
                map((list) => list.reduce((sum, o) => [...sum, ...o], [])),
                // filter unique values only
                map(list => list.filter((o, i, self) => self.indexOf(o) === i))
            )
            .toPromise()
            .then((list) => (this.powerList = list));
    }

    async onSave() {
        await this.characterSvc.save(this.form.value);
        this.onCancel();
    }

    onCancel() {
        this.router.navigate(['..'], { relativeTo: this.route });
    }

    onAddPower(input: HTMLInputElement) {
        this.powers.push(this.fb.control(input.value));
        input.value = '';
    }

    onRemovePower(index: number) {
        this.powers.removeAt(index);
    }

    powerSearch = (text$: Observable<string>) =>
        text$.pipe(
            debounceTime(200),
            distinctUntilChanged(),
            map((term) => term.toLowerCase()),
            map((term) => {
                // prevent suggestion before 2 characters
                if (term.length < 2) return [] as Character[];

                return this.powerList
                    .filter((v) => v.toLowerCase().indexOf(term) > -1)
                    // exclude powers of this character
                    .filter((o) => !this.form.value.powers.includes(o))
                    .slice(0, 10); // limit to 10
            })
        );
}
