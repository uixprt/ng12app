import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <!--The content below is only a placeholder and can be replaced.-->
      <div class="content">
          <h1>
              Welcome to {{title}}!
          </h1>
          <div (click)="nope($event)">
              <button (click)="nope($event)">Click</button>
          </div>
          <button class="trigger-cd-from-zone">Trigger CD on click from Zone.js</button>
          <app-child></app-child>
      </div>
      <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements AfterViewInit {
  title = 'ng12app';


  ngAfterViewInit(): void {
    /**
     * direct DOM Manipulation is bad practice because `app-child` Component
     * still exist in the Angular components tree and cause Change Detection
     */
    const root: HTMLElement | null = document.querySelector('app-child');
    root?.parentNode?.removeChild(root);

    /**
     * Zone.js triggered Change Detection also from pure js event as well as 3d libs events.
     */
    const button: HTMLElement | null = document.querySelector('.trigger-cd-from-zone');
    button?.addEventListener('click', (e) => this.nope(e));
  }

  nope(e: MouseEvent) {
    console.log('nope', e?.target);
  }
}
