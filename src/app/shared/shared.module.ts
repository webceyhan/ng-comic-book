import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
    declarations: [],
    imports: [CommonModule, FormsModule, NgbModule, AngularFirestoreModule],
    exports: [CommonModule, FormsModule, NgbModule, AngularFirestoreModule],
})
export class SharedModule {}
