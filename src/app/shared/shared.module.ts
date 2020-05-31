import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ImgFallbackDirective } from './directives/img-fallback.directive';

const DECLARATIONS = [ImgFallbackDirective];

@NgModule({
    declarations: DECLARATIONS,
    imports: [CommonModule, FormsModule, NgbModule, AngularFirestoreModule],
    exports: [
        CommonModule,
        FormsModule,
        NgbModule,
        AngularFirestoreModule,
        ...DECLARATIONS,
    ],
})
export class SharedModule {}
