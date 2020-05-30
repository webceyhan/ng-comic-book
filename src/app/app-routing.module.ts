import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharachtersComponent } from './charachters/charachters.component';

const routes: Routes = [
    { path: '', redirectTo: '/characters', pathMatch: 'full' },
    { path: 'characters', component: CharachtersComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
