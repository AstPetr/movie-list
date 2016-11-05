 import { Component, OnInit } from '@angular/core';
 import {Router, ActivatedRoute} from '@angular/router';
 import {MovieService} from "../movie.service";
 import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'ml-movie',
  templateUrl: 'movie.component.html',
  styleUrls: ['movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Object;
  movieVideo: Object;
  video: any = {id: 'wzrnuUOoFNM'};
  baseUrl:string = 'https://www.youtube.com/embed/';
  link: string = 'https://www.youtube.com/embed/hEJnMQG9ev8';
  url: SafeResourceUrl;

  createVideoLink(id) {
    return this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + id);
  }

  constructor(private router:ActivatedRoute, private movieService:MovieService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      let id = params['id'];
      this.movieService.getMovie(id).subscribe(movie => {
        // console.log(movie);
        this.movie = movie;
      });
      this.movieService.getMovieVideos(id).subscribe(video => {
        console.log(video);
        this.movieVideo = video;
      });
    });
    // console.log(this.movieVideo.id);
  }

}
