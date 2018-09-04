import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemImageUrl = '../assets/cobra.gif';
  isUnchanged = true;
  classes = 'special';
  // #docregion parent-data-type
  parentItem = 'bananas';
  // #enddocregion parent-data-type

  // #docregion pass-object
  currentItem = [{
    id: 21,
    name: 'peaches'
  }];
  // #enddocregion pass-object


}
