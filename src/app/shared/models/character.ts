import { Model } from './model';

export interface Character extends Model {
    name: string;
    alias: string;
    realName?: string;
    location?: string;
    occupation?: string;
    alignment: 'hero' | 'villain' | 'other';
    powers: string[];
    imageURL: string;
    story: string;
}
