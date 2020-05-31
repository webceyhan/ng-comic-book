import { Model } from './model';

export interface Character extends Model {
    name: string;
    alias: string;
    imageURL: string;
}
