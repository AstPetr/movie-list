import { Component, OnInit } from '@angular/core';
import {SafeResourceUrl, DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {TvService} from "../tv.service";

@Component({
  selector: 'ml-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {

  tvshow: Object;
  tvshowVideo: Object;
  tvshowKeywords: Object;
  baseUrl:string = 'https://www.youtube.com/embed/';
  url: SafeResourceUrl;

  createVideoLink(id='HkIMQLh9k5U') {
    return this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + id);
  }

  constructor(private router:ActivatedRoute, private tvService:TvService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      let id = params['id'];
      this.tvService.getTvShow(id).subscribe(tvshow => {
        console.log(tvshow);
        this.tvshow = tvshow;
      });
      this.tvService.getTvShowVideos(id).subscribe(video => {
        // console.log(video);
        this.tvshowVideo = video;
      });
      this.tvService.getTvShowKeywords(id).subscribe(keywords => {
        this.tvshowKeywords = keywords;
      });
    });
    // console.log(this.movieVideo.id);
  }

}
