import { Component, OnInit } from '@angular/core';
import {MovieService} from "./movie.service";

@Component({
  selector: 'ml-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private movieService: MovieService) {
    this.movieService.getPopular().subscribe(res => {
      console.log(res.results);
    });
    // this.movieService.getInTheaters().subscribe(res => {
    //   console.log(res.results);
    // });
  }

  ngOnInit() {
  }

}
