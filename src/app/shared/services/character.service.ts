import { Injectable } from '@angular/core';

import { DataService } from './data.service';
import { Character } from '../models/character';

@Injectable({
    providedIn: 'root',
})
export class CharacterService extends DataService<Character> {
    protected path = 'characters';

    // updateAll() {
    //     this.collection()
    //         .get()
    //         .toPromise()
    //         .then((list) => {
    //             list.docs.forEach((doc) => {
    //                 const { createdAt, updatedAt } = doc.data();
    //                 doc.ref.update({
    //                     createdAt: createdAt || updatedAt,
    //                 });
    //             });
    //         });
    // }
}
