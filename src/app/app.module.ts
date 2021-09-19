import {ApplicationRef, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(applicationRef: ApplicationRef) {
    const originalTick = applicationRef.tick;
    applicationRef.tick = function() {
      const windowPerformance = window.performance;
      const before = windowPerformance.now();
      originalTick.apply(this, [])
      const after = windowPerformance.now();
      const time = after - before;

      window.console.log('CHANGE DETECTION TIME: ', time);
    }
  }
}
