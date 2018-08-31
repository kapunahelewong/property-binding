import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  // #docregion input-type
  @Input() childItem: string;
  // #enddocregion input-type
  
  currentItem = 'bananas in boxes';

  constructor() { }

  ngOnInit() {
  }

}
