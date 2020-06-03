import {
    Component,
    OnInit,
    EventEmitter,
    Output,
    OnDestroy,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

import { GENDERS, ALIGNMENTS } from 'shared/models/character';

@Component({
    selector: 'app-character-filters',
    templateUrl: './character-filters.component.html',
    styleUrls: ['./character-filters.component.css'],
})
export class CharacterFiltersComponent implements OnInit, OnDestroy {
    @Output()
    update = new EventEmitter();

    form: FormGroup;
    changeSub: Subscription;

    readonly genders = GENDERS;
    readonly alignments = ALIGNMENTS;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            gender: [''],
            alignment: this.fb.array(
                this.alignments.map((a) => this.fb.control(false))
            ),
        });

        this.changeSub = this.form.valueChanges.subscribe((value) =>
            this.onUpdate(value)
        );
    }

    ngOnDestroy(): void {
        this.changeSub.unsubscribe();
    }

    onUpdate(value: any) {
        const alignment = this.alignments.filter((v, i) => {
            return value.alignment[i];
        });

        this.update.next({ ...value, alignment });
    }
}
