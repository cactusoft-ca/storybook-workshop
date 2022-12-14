import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CactusDetailsComponent } from './cactus-details/cactus-details.component';
import { CactusPage } from './cactus-page/cactus.page';
import { CactusSummaryComponent } from './cactus-summary/cactus-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    CactusPage,
    CactusSummaryComponent,
    CactusDetailsComponent,
  ],
  exports: [CactusPage],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
