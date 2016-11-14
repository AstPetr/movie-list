import {Routes, RouterModule} from "@angular/router";
import {MoviesComponent} from "./movies/movies.component";
import {ModuleWithProviders} from "@angular/core";
import {TvComponent} from "./tv/tv.component";
import {ListsComponent} from "./lists/lists.component";
import {listRoutes} from "./lists/list.routes";
import {MovieComponent} from "./movies/movie/movie.component";
import {TvShowComponent} from "./tv/tv-show/tv-show.component";

const appRoutes: Routes = [
  {
    path: 'tv/:id',
    component: TvShowComponent
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  },
  {
    path: 'lists',
    component: ListsComponent,
    children: listRoutes
  },
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: 'tv',
    component: TvComponent
  },
  {
    path: '',
    component: MoviesComponent
  }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
