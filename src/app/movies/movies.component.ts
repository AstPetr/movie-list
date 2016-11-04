import {Component, OnInit} from '@angular/core';
import {MovieService} from "./movie.service";

@Component({
  selector: 'ml-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  popularList: Array<Object>;
  popularListTwo: Array<Object>;
  // popularListAll: Array<Object>;
  theatersList: Array<Object>;
  searchResults: Array<Object>;


  search(query) {
    if (query) {
      this.movieService.searchMovie(query).subscribe(res => {
        this.searchResults = res.results;
        // console.log(res.results);
      });
    }
  }

  constructor(private movieService: MovieService) {
    this.movieService.getPopular().subscribe(res => {
      this.popularList = res.results;
    });
    this.movieService.getPopularSecond().subscribe(res => {
      this.popularListTwo = res.results;
    });
    this.movieService.getInTheaters().subscribe(res => {
      this.theatersList = res.results;
    });
    // this.popularListAll = Object.assign({}, this.popularList, this.popularListTwo);
  }

  ngOnInit() {
  }

}
