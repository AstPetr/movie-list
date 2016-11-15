import {Component, OnInit, Input} from '@angular/core';
import {MovieService} from "../movies/movie.service";
import {Router} from "@angular/router";
import {TvService} from "../tv/tv.service";

@Component({
  selector: 'ml-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  searchResults: Array<Object>;
  @Input() section: string = "movie";

  clear(query){
    query.value = "";
  }

  search(query) {
    if (query) {
      document.body.scrollTop = 0;
      if (this.section === "tv") {
        this.tvService.searchTvShow(query).subscribe(res => {
          this.searchResults = res.results;
        });
      } else {
        this.movieService.searchMovie(query).subscribe(res => {
          this.searchResults = res.results;
        });
      }
    }
  }

  onNavigate(movie){
    if (this.section === "tv") {
      this.router.navigate(['/tv/' + movie.id]);
    } else {
      this.router.navigate(['/movie/' + movie.id]);
    }
  }

  constructor(private movieService: MovieService, private router: Router, private tvService: TvService) { }

  ngOnInit() {
    // console.log(this.section);
  }

}
