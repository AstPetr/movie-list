import { Component, OnInit } from '@angular/core';
import {List} from "../list";
import {ListService} from "./list.service";
import {MovieService} from "../movies/movie.service";

@Component({
  selector: 'ml-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.css']
  // styleUrls: ['../movies/movies.component.css']
})
export class ListAddComponent implements OnInit {
  isAdd = true;
  list: List;
  searchResults: Array<Object>;
  posters: string[] = [];
  items: string[] = [];

  constructor(private listService: ListService, private movieService: MovieService) { }

  ngOnInit() {
  }

  onSubmit(list: List) {
    list.items = this.items;
    if(!this.isAdd) {
      // edit
    } else {
    this.list = new List(list.name, list.items);
      this.listService.addList(this.list);
    }
    this.posters = [];
    this.items = [];
    this.searchResults = [];
  }

  onNavigate(movie){
    this.items.push(movie.id);
    this.posters.push(movie.poster_path);
  }

  clear(query){
    query.value = "";
  }

  search(query) {
    if (query) {
      this.movieService.searchMovie(query).subscribe(res => {
        this.searchResults = res.results;
      });
    }
  }

}
