import { AppComponent } from './app.component';
import { Routes } from '@angular/router';

export const mainRoute:  Routes = [
     
     {
          path: '', component: AppComponent, pathMatch: 'full'
     }

]
