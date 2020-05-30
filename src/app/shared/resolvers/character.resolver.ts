import { Injectable } from '@angular/core';
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Character } from 'shared/models/character';
import { CharacterService } from 'shared/services/character.service';

@Injectable({
    providedIn: 'root',
})
export class CharacterResolver implements Resolve<Character> {
    constructor(private characterSvc: CharacterService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Character | Observable<Character> | Promise<Character> {
        return this.characterSvc.get(route.params.id).pipe(take(1));
    }
}
