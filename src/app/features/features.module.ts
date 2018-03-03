import { routes } from './features.routing';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
     declarations: [],
     imports: [
          SharedModule,
          RouterModule.forChild(routes)
     ],
     exports: []
})
export class FeaturesModule {}