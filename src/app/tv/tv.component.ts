import { Component, OnInit } from '@angular/core';
import {TvService} from "./tv.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ml-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['../movies/movies.component.css']
})
export class TvComponent implements OnInit {

  popularList: Array<Object>;
  popularListTwo: Array<Object>;
  searchResults: Array<Object>;

  onNavigate(tvshow){
    this.router.navigate(['tv/'+tvshow.id]);
    document.body.scrollTop = 0;
  }

  clear(query){
    query.value = "";
  }

  search(query) {
    if (query) {
      document.body.scrollTop = 0;
      this.tvService.searchTvShow(query).subscribe(res => {
        this.searchResults = res.results;
      });
    }
  }

  constructor(private tvService: TvService, private router: Router) {
    this.tvService.getPopular().subscribe(res => {
      this.popularList = res.results;
    });
    this.tvService.getPopularSecond().subscribe(res => {
      this.popularListTwo = res.results;
    });
  }

  ngOnInit() {}

}
