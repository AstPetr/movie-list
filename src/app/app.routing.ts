import {Routes, RouterModule} from "@angular/router";
import {MoviesComponent} from "./movies/movies.component";
import {ModuleWithProviders} from "@angular/core";
import {TvComponent} from "./tv/tv.component";
import {ListsComponent} from "./lists/lists.component";
import {listRoutes} from "./lists/list.routes";
import {MovieComponent} from "./movies/movie/movie.component";
import {TvShowComponent} from "./tv/tv-show/tv-show.component";

const appRoutes: Routes = [
  // Serialo info
  {
    path: 'tv/:id',
    component: TvShowComponent
  },
  // Filmo info
  {
    path: 'movie/:id',
    component: MovieComponent
  },
  // Saraso vaikai
  {
    path: 'lists',
    component: ListsComponent,
    children: listRoutes
  },
  // Sarasai
  {
    path: 'lists',
    component: ListsComponent
  },
  // Serialai
  {
    path: 'tv',
    component: TvComponent
  },
  // Filmai, pagr puslapis
  {
    path: '',
    component: MoviesComponent
  }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
