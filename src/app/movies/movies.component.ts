import {Component, OnInit} from '@angular/core';
import {MovieService} from "./movie.service";
import {RouterModule, Router} from "@angular/router";

@Component({
  selector: 'ml-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  popularList: Array<Object>;
  popularListTwo: Array<Object>;
  theatersList: Array<Object>;
  searchResults: Array<Object>;

  onNavigate(movie){
    this.router.navigate(['/movie/'+movie.id]);
  }

  search(query) {
    if (query) {
      this.movieService.searchMovie(query).subscribe(res => {
        this.searchResults = res.results;
        // console.log(res.results);
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
    // this.popularListAll = Object.assign({}, this.popularList, this.popularListTwo);
  }

  ngOnInit() {
  }

}
