import { Component, OnInit } from '@angular/core';
import {MovieService} from "../movies/movie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ml-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  searchResults: Array<Object>;

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

  onNavigate(movie){
    this.router.navigate(['/movie/'+movie.id]);
    document.body.scrollTop = 0;
  }

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
  }

}
