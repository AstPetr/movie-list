import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ListService} from "../list.service";
import {List} from "../../list";
import {MovieService} from "../../movies/movie.service";

@Component({
  selector: 'ml-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // list: List;
  movieIds: string[];
  movieList: Array<Object> = [];

  onNavigate(movie) {
    this.router.navigate(['/movie/'+movie.id]);
  }

  constructor(private activatedRouter: ActivatedRoute, private router: Router, private listService: ListService, private movieService: MovieService) { }

  ngOnInit() {
    // rezultatai ne is eiles - fix!!!
    this.activatedRouter.params.subscribe((params) => {
      let id = params['id'];
      this.movieIds = this.listService.getList(id).items;
      this.movieList = [];
      for (let id of this.movieIds){
        this.movieService.getMovie(id).subscribe(movie => {
          this.movieList.push(movie);
        });
      }

      });
  }

}

