import {Routes, RouterModule} from "@angular/router";
import {MoviesComponent} from "./movies/movies.component";
import {ModuleWithProviders} from "@angular/core";
import {movieRoutes} from "./movies/movies.routes";
import {TvComponent} from "./tv/tv.component";
import {tvRoutes} from "./tv/tv.routes";
import {ListsComponent} from "./lists/lists.component";

const appRoutes: Routes = [
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: 'tv',
    component: TvComponent,
    children: tvRoutes
  },
  {
    path: 'tv',
    component: TvComponent
  },
  {
    path: '',
    component: MoviesComponent,
    children: movieRoutes
  },
  {
    path: '',
    component: MoviesComponent
  }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
