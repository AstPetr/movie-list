import {Component, OnInit, OnDestroy} from '@angular/core';
import {MovieService} from "./movie.service";
import {RouterModule, Router} from "@angular/router";

@Component({
  selector: 'ml-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {
  popularList: Array<Object>;
  popularListTwo: Array<Object>;
  theatersList: Array<Object>;
  searchResults: Array<Object>;

  over() {
    console.log("mouse enter");
  }
  onNavigate(movie){
    this.router.navigate(['/movie/'+movie.id]);
    document.body.scrollTop = 0;
  }

  clear(query){
    query.value = "";
  }

  search(query) {
    if (query) {
      document.body.scrollTop = 0;
      this.movieService.searchMovie(query).subscribe(res => {
        this.searchResults = res.results;
      });
    }
  }

  constructor(private movieService: MovieService, private router: Router) {
    this.movieService.getPopular().subscribe(res => {
      this.popularList = res.results;
    });
    this.movieService.getPopularSecond().subscribe(res => {
      this.popularListTwo = res.results;
    });
    this.movieService.getInTheaters().subscribe(res => {
      this.theatersList = res.results;
    });
  }

  ngOnInit() {}

  ngOnDestroy() {}

}
