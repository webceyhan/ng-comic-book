import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Character } from './character';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class CharacterService {
    constructor(private fs: AngularFirestore) {}

    list() {
        return this.fs.collection<Character>('characters').valueChanges().pipe(tap(console.log));
    }
}
