import {
    Component,
    OnInit,
    EventEmitter,
    Output,
    OnDestroy,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

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

    readonly alignmentOptions = ['hero', 'villain', 'other'];

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            alignment: this.fb.group({
                hero: [false],
                villain: [false],
                other: [false],
            }),
        });

        this.changeSub = this.form.valueChanges.subscribe((value) =>
            this.onUpdate(value)
        );
    }

    ngOnDestroy(): void {
        this.changeSub.unsubscribe();
    }

    onUpdate(value) {
        const alignment = this.parseAlignment(value);

        this.update.next({
            alignment,
        });
    }

    // HELPERS /////////////////////////////////////////////////////////////////////////////////////

    private parseAlignment(value) {
        // normalize alignment filter
        const alignment = Object.entries(value.alignment)
            .filter(([, v]) => !!v)
            .map(([k]) => k);

        // set filter if contains any value or null
        return alignment.length > 0 ? alignment : null;
    }
}
