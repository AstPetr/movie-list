import {Routes} from "@angular/router";
import {TvShowComponent} from "./tv-show/tv-show.component";

export const tvRoutes: Routes = [
  {
    path: ':id',
    component: TvShowComponent
  }
];
