import { Model } from './model';

type Gender = 'male' | 'female';
type Alignment = 'hero' | 'villain' | 'other';

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
