import { Component } from '@angular/core';

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
      </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'ng12app';

  nope() {}
}
