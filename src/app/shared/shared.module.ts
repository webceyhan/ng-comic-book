import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
    declarations: [],
    imports: [CommonModule, NgbModule, AngularFirestoreModule],
    exports: [CommonModule, NgbModule, AngularFirestoreModule],
})
export class SharedModule {}
