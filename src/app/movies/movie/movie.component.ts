 import { Component, OnInit } from '@angular/core';
 import {Router, ActivatedRoute} from '@angular/router';
 import {MovieService} from "../movie.service";

@Component({
  selector: 'ml-movie',
  templateUrl: 'movie.component.html',
  styleUrls: ['movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Object;
  movieVideo: Object;

  constructor(private router:ActivatedRoute, private movieService:MovieService) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      let id = params['id'];
      this.movieService.getMovie(id).subscribe(movie => {
        console.log(movie);
        this.movie = movie;
      });
      this.movieService.getMovieVideos(id).subscribe(video => {
        console.log(video);
        this.movieVideo = video;
        // console.log(this.movieVideo);
      });
    });
    // console.log(this.movieVideo.id);
  }

}
