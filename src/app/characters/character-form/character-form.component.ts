import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Character } from 'shared/models/character';

@Component({
    selector: 'app-character-form',
    templateUrl: './character-form.component.html',
    styleUrls: ['./character-form.component.css'],
})
export class CharacterFormComponent implements OnInit {
    @Input() character = {} as Character;
    @Output() save = new EventEmitter<Character>();
    @Output() cancel = new EventEmitter<void>();

    readonly alignmentOptions = ['hero', 'villain', 'other'];

    constructor() {}

    ngOnInit(): void {}

    get edit() {
        return !!this.character.id;
    }

    onSave() {
        this.save.emit(this.character);
    }

    onCancel() {
        this.cancel.emit();
    }
}
