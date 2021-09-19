import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <!--The content below is only a placeholder and can be replaced.-->
      <div class="content">
          <h1>
              Welcome to {{title}}!
          </h1>
          <div (click)="nope()">
              <button (click)="nope()">click</button>
          </div>
          <app-child></app-child>
      </div>
      <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements AfterViewInit {
  title = 'ng12app';

  /**
   * direct DOM Manipulation is bad practice because `app-child` Component
   * still exist in the Angular components tree and cause Change Detection
   */
  ngAfterViewInit(): void {
    const root: HTMLElement | null = document.querySelector('app-child');
    root?.parentNode?.removeChild(root);
  }

  nope() {
  }
}
