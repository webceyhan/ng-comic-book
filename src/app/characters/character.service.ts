import { Injectable } from '@angular/core';

import { DataService } from '../shared/data.service';
import { Character } from './character';

@Injectable({
    providedIn: 'root',
})
export class CharacterService extends DataService<Character> {
    protected path = 'characters';
}
