import {Component, DoCheck} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works!
    </p>
  `,
  styles: [
  ]
})
export class ChildComponent implements DoCheck {

  ngDoCheck(): void {
    console.log('ChildComponent');
  }

}
