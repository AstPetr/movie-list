import {Component} from '@angular/core';
import {MovieService} from "./movie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ml-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  popularList: Array<Object>;
  popularListTwo: Array<Object>;

  onNavigate(movie){
    this.router.navigate(['/movie/'+movie.id]);
  }

  constructor(private movieService: MovieService, private router: Router) {
    this.movieService.getPopular(2).subscribe(res => {
      this.popularList = res.results;
    });
    this.movieService.getPopular(3).subscribe(res => {
      this.popularListTwo = res.results;
    });
  }

}
