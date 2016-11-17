import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header.component';
import { MoviesComponent } from './movies/movies.component';
import {MovieService} from "./movies/movie.service";
import { FooterComponent } from './layout/footer.component';
import { MovieComponent } from './movies/movie/movie.component';
import { routing } from './app.routing';
import { TvComponent } from './tv/tv.component';
import { TvShowComponent } from './tv/tv-show/tv-show.component';
import {TvService} from "./tv/tv.service";
import {DropdownDirective} from "./layout/dropdown.directive";
import { ListsComponent } from './lists/lists.component';
import {ListService} from "./lists/list.service";
import { ListAddComponent } from './lists/list-add.component';
import { ListComponent } from './lists/list/list.component';
import { ThumbanimDirective } from './thumbanim.directive';
import {ListlightDirective} from "./lists/list/listlight.directive";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    FooterComponent,
    MovieComponent,
    TvComponent,
    TvShowComponent,
    DropdownDirective,
    ListsComponent,
    ListAddComponent,
    ListComponent,
    ThumbanimDirective,
    ListlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [MovieService, TvService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
