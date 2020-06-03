import { Model } from './model';

type Gender = 'male' | 'female';
type Alignment = 'hero' | 'villain' | 'complicated';

export interface Character extends Model {
    name: string;
    alias?: string;
    alignment: Alignment;
    realName?: string;
    gender: Gender;
    location?: string;
    occupation?: string;
    powers?: string[];
    imageURL?: string;
    story: string;
}

export const GENDERS = ['male', 'female'];
export const ALIGNMENTS = ['hero', 'villain', 'complicated'];
