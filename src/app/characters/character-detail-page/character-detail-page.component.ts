import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Character } from 'shared/models/character';
import { CharacterService } from 'shared/services/character.service';

@Component({
    selector: 'app-character-detail-page',
    templateUrl: './character-detail-page.component.html',
    styleUrls: ['./character-detail-page.component.css'],
})
export class CharacterDetailPageComponent implements OnInit {
    character: Character;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private characterSvc: CharacterService
    ) {}

    ngOnInit(): void {
        this.character = this.route.snapshot.data.character;
    }

    onDelete() {
        if (confirm('are you sure to delete?')) {
            this.characterSvc.remove(this.character.id);
            this.router.navigate(['..']);
        }
    }
}
