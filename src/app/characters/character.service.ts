import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Character } from './character';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class CharacterService {
    path = 'characters';

    constructor(private fs: AngularFirestore) {}

    list() {
        const ref = this.fs.collection<Character>(this.path);

        return ref.valueChanges({ idField: 'id' });
    }
}
