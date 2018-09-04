import { Component, OnInit, Input } from '@angular/core';
import { ITEMS } from '../mock-items';
import { Item } from '../item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {


  items = ITEMS;

  // #docregion item-input
  @Input() item: Item;
  // #enddocregion item-input


  constructor() { }

  ngOnInit() {
  }

}
