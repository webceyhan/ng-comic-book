import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CharacterService } from 'shared/services/character.service';
import { Character } from 'shared/models/character';

@Component({
    selector: 'app-character-edit-page',
    templateUrl: './character-edit-page.component.html',
    styleUrls: ['./character-edit-page.component.css'],
})
export class CharacterEditPageComponent implements OnInit {
    character = {} as Character;

    readonly alignmentOptions = ['hero', 'villain', 'other'];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private characterSvc: CharacterService
    ) {}

    get edit() {
        return !!this.character.id;
    }

    ngOnInit(): void {
        this.character = this.route.snapshot.data.character || {};
    }

    async onSave() {
        await this.characterSvc.save(this.character);
        this.onCancel();
    }

    onCancel() {
        this.router.navigate(['..'], { relativeTo: this.route });
    }
}
