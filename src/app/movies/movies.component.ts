import {Component, OnInit, Input} from '@angular/core';
import {MovieService} from "./movie.service";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'ml-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularList: Array<Object>;
  theatersList: Array<Object>;
  searchResults: Array<Object>;

  search(query) {
    this.movieService.searchMovie(query).subscribe(res => {
      this.searchResults = res.results;
      console.log(res.results);
    });
  }

  constructor(private movieService: MovieService) {
    this.movieService.getPopular().subscribe(res => {
      this.popularList = res.results;
    });
    this.movieService.getInTheaters().subscribe(res => {
      this.theatersList = res.results;
    });
  }



  ngOnInit() {
    // this.searchResults = this.query.valueChanges
    //   .debounceTime(400)
    //   .distinctUntilChanged()
    //   .switchMap(query => this.movieService.searchMovie(query));
  }

}
