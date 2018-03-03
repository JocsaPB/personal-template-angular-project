import { routes } from './../features/features.routing';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

@NgModule({
     declarations: [],
     imports: [
          SharedModule,
          RouterModule.forChild(routes)
     ],
     exports: []
})
export class MainFeatureModule {

}