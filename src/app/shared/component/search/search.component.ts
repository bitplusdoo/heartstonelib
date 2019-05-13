import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})

export class SearchComponent {

    @Input() items: any[] = [];
    @Input() filteredProperty: string;

    @Output() searchCompleted = new EventEmitter();
    @Output() searchStarted = new EventEmitter();

    handleSearch(event) {

        this.searchStarted.emit();
        const searchedText = event.target.value;

        if (!this.items) { return this.searchCompleted.emit([]); }
        if (!searchedText) { return this.searchCompleted.emit(this.items); }

        const filteredItems = this.items.filter((item) => {
            return item[this.filteredProperty].toLowerCase().includes(searchedText.toLowerCase());
        });

        console.log(filteredItems);

        this.searchCompleted.emit(filteredItems);
    }

}

