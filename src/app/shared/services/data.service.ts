import { Injectable } from '@angular/core';
import { AngularFirestore, QueryFn, QueryGroupFn } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Model } from '../models/model';

@Injectable({
    providedIn: 'root',
})
export class DataService<T extends Model> {
    protected path: string;

    constructor(protected db: AngularFirestore) {}

    list(query?: QueryFn): Observable<T[]> {
        return this.collection(query).valueChanges({ idField: 'id' });
    }

    get(id: string): Observable<T> {
        return this.doc(id)
            .valueChanges()
            .pipe(map((data) => ({ ...data, id })));
    }

    async save(data: T): Promise<T> {
        return data.id ? this.update(data) : this.create(data);
    }

    async remove(id: string): Promise<void> {
        return this.doc(id).delete();
    }

    protected async create(data: T): Promise<T> {
        // put timestamps
        const time = new Date().getTime();
        data.createdAt = data.updatedAt = time;

        // add document to the collection
        const ref = await this.collection().add(data);

        // return created date
        return { id: ref.id, ...data };
    }

    protected async update(data: T): Promise<T> {
        // update timestamp
        data.updatedAt = new Date().getTime();

        // sanitize payload to update
        const payload = { ...data };
        delete payload.id;

        // update data
        await this.doc(data.id).update(payload);

        // return updated data
        return { id: data.id, ...data };
    }

    // HELPERS /////////////////////////////////////////////////////////////////////////////////////

    protected collection(query?: QueryFn) {
        return this.db.collection<T>(this.path, query);
    }

    protected group(query?: QueryGroupFn<T>) {
        return this.db.collectionGroup<T>(this.path, query);
    }

    protected doc(id: string) {
        return this.db.doc<T>(this.path + '/' + id);
    }
}
