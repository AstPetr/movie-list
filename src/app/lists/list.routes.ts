import {ListComponent} from "./list/list.component";
import {Routes} from "@angular/router";

export const listRoutes: Routes = [
  {
    path: ':id',
    component: ListComponent
  }
];
