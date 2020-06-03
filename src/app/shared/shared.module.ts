import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { SortMenuComponent } from './components/sort-menu/sort-menu.component';
import { ImgFallbackDirective } from './directives/img-fallback.directive';

const DECLARATIONS = [SortMenuComponent, ImgFallbackDirective];

@NgModule({
    declarations: DECLARATIONS,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        AngularFirestoreModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        AngularFirestoreModule,
        ...DECLARATIONS,
    ],
})
export class SharedModule {}
