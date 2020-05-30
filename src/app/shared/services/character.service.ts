import { Injectable } from '@angular/core';

import { DataService } from './data.service';
import { Character } from '../models/character';

@Injectable({
    providedIn: 'root',
})
export class CharacterService extends DataService<Character> {
    protected path = 'characters';
}
