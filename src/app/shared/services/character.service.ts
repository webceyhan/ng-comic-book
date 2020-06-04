import { Injectable } from '@angular/core';

import { DataService } from './data.service';
import { Character } from '../models/character';
import { shareReplay, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class CharacterService extends DataService<Character> {
    protected path = 'characters';

    listPowers() {
        return this.list().pipe(
            shareReplay(1),
            // pluck powers field or empty array
            map((list) => list.map((o) => o.powers || [])),
            // flatten all powers arrays
            map((list) => list.reduce((sum, o) => [...sum, ...o], [])),
            // filter unique values only
            map((list) => list.filter((o, i, self) => self.indexOf(o) === i))
        );
    }

    // async updateAll() {
    //     const list = await this.collection().get().toPromise();
    //     const powerList = this.db.collection('powers');

    //     list.docs.forEach((doc) => {
    //         const powers = doc.data().powers as string[];
    //         if (!powers) return; // skip

    //         powers.forEach((p) => {
    //             const id = p.toLowerCase().replace(/ /g, '-');
    //             powerList.doc(id).set({ label: p });
    //         });
    //     });

    // }

}
