import {Routes, RouterModule} from "@angular/router";
import {MoviesComponent} from "./movies/movies.component";
import {ModuleWithProviders} from "@angular/core";
import {MovieComponent} from "./movies/movie/movie.component";
import {movieRoutes} from "./movies/movies.routes";

const appRoutes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: '',
    component: MoviesComponent,
    children: movieRoutes
  }
  // {
  //   path: 'movie/:id',
  //   component: MovieComponent
  // }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
