import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Character } from 'shared/models/character';
import { CharacterService } from 'shared/services/character.service';

@Component({
    selector: 'app-character-edit-page',
    templateUrl: './character-edit-page.component.html',
    styleUrls: ['./character-edit-page.component.css'],
})
export class CharacterEditPageComponent implements OnInit {
    form: FormGroup;

    readonly genders = ['male', 'female'];
    readonly alignments = ['hero', 'villain', 'other'];

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private characterSvc: CharacterService
    ) {}

    get edit() {
        return !!this.form.value.id;
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
        });
    }

    async onSave() {
        await this.characterSvc.save(this.form.value);
        this.onCancel();
    }

    onCancel() {
        this.router.navigate(['..'], { relativeTo: this.route });
    }
}
