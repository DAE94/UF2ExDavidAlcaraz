import { Routes } from '@angular/router';
import {AplicacioComponent} from "./aplicacio/aplicacio.component";

export const routes: Routes = [
  {path: 'aplicacio',
    component: AplicacioComponent},
  {path: '',
    component: AplicacioComponent}
];
