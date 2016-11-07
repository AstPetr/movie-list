import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ListService} from "../list.service";
import {List} from "../../list";
import {MovieService} from "../../movies/movie.service";

@Component({
  selector: 'ml-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: List;
  movieIds: string[];
  movie: Object;

  constructor(private router: ActivatedRoute, private listService: ListService, private movieService: MovieService) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      let id = params['id'];
      this.movieIds = this.listService.getList(id).items;
      // this.movieService.getMovie(this.listService.getList(id).items[0]).subscribe(movies => {
      //   this.movies = movies;
      // });
      // this.movies = this.movieService.getMovies(this.listService.getList(id).items);
      // console.log(this.movies);
      }
    )
  }

}
