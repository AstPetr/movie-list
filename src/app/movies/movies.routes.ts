import {Routes} from "@angular/router";
import {MovieComponent} from "./movie/movie.component";

export const movieRoutes: Routes = [
  {
    path: 'movie/:id',
    component: MovieComponent
  }
];
