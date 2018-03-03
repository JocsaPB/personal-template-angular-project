import { FeaturesModule } from './features/features.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { mainRoute } from './app.routing';

import { CoreServicesModule } from './core-services/core-services.module';
import { MainFeatureModule } from './main-features/main-features.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainFeatureModule,
    FeaturesModule,
    CoreServicesModule,
    RouterModule.forRoot(mainRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
