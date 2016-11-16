 import {Component, OnInit} from '@angular/core';
 import {ActivatedRoute} from '@angular/router';
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
  movieKeywords: Object;
  baseUrl:string = 'https://www.youtube.com/embed/';
  url: SafeResourceUrl;

  createVideoLink(id='HkIMQLh9k5U') {
    return this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + id);
  }

  constructor(private router:ActivatedRoute, private movieService:MovieService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      let id = params['id'];
      this.movieService.getMovie(id).subscribe(movie => {
        this.movie = movie;
      });
      this.movieService.getMovieVideos(id).subscribe(video => {
        this.movieVideo = video;
      });
      this.movieService.getMovieKeywords(id).subscribe(keywords => {
        this.movieKeywords = keywords;
      });
    });
  }

}
