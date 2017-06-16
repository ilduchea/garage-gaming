import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Gamer } from '../gamer.model';

@Component({
  selector: 'app-game-types',
  templateUrl: './game-types.component.html',
  styleUrls: ['./game-types.component.css']
})
export class GameTypesComponent implements OnInit {
  @Input() items: string[];
  @Input() options: [string, boolean];
  @Output() updateItemSender = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.items.push('');
  }

  updateItem(item: string, index: number, option: string) {
    if (option === 'update') {
      this.items.splice(index, 1, item);
    }
    if (option === 'delete') {
      this.items.splice(index, 1);
    }
    this.updateItemSender.emit(this.items);
  }
}
