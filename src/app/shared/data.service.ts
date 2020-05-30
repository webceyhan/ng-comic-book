import { Injectable } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Model {
    id?: string;
    createdAt?: number;
    updatedAt?: number;
}

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
            .pipe(map((data) => ({ id, ...data })));
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
        // sanitize id
        const { id } = data;
        delete data.id;

        // update timestamp
        data.updatedAt = new Date().getTime();

        // update data
        await this.doc(id).update(data);

        // return updated data
        return { id, ...data };
    }

    // HELPERS /////////////////////////////////////////////////////////////////////////////////////

    protected collection(query?: QueryFn) {
        return this.db.collection<T>(this.path, query);
    }

    protected group(query?: QueryFn) {
        return this.db.collectionGroup<T>(this.path, query);
    }

    protected doc(id: string) {
        return this.db.doc<T>(this.path + '/' + id);
    }
}
