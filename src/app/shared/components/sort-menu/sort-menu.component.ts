import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Item } from 'shared/models/item';

@Component({
    selector: 'app-sort-menu',
    templateUrl: './sort-menu.component.html',
    styleUrls: ['./sort-menu.component.css'],
})
export class SortMenuComponent {
    @Input() items: Item[] = [];
    @Output() select = new EventEmitter<Item>();

    index = 0;

    onSelect(index: number) {
        this.index = index;
        this.select.emit(this.items[index]);
    }
}
