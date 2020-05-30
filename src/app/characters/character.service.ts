import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
} from '@angular/fire/firestore';

import { Character } from './character';

@Injectable({
    providedIn: 'root',
})
export class CharacterService {
    protected path = 'characters';
    protected collection: AngularFirestoreCollection<Character>;

    constructor(private fs: AngularFirestore) {
        this.collection = this.fs.collection(this.path);
    }

    list() {
        return this.collection.valueChanges({ idField: 'id' });
    }
}
