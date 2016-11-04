import {Routes, RouterModule} from "@angular/router";
import {MoviesComponent} from "./movies/movies.component";
import {ModuleWithProviders} from "@angular/core";
import {MovieComponent} from "./movie/movie.component";

const appRoutes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
