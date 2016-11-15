import {Component, Input, OnChanges} from '@angular/core';
import {List} from "../list";
import {ListService} from "./list.service";
import {MovieService} from "../movies/movie.service";

@Component({
  selector: 'ml-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.css']
})
export class ListAddComponent implements OnChanges {
  isAdd = true;
  @Input() list: List;
  searchResults: Array<Object>;
  posters: string[] = [];
  items: string[] = [];

  constructor(private listService: ListService, private movieService: MovieService) { }

  ngOnChanges(changes) {
    if (changes.list.currentValue === null) {
      this.isAdd = true;
      this.list = {name: null, items: null};
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(list: List) {
    list.items = this.items;
    const newList = new List(list.name, list.items);
    if(!this.isAdd) {
      this.listService.editList(this.list, newList);
      this.onClear();
    } else {
      this.list = newList;
      this.listService.addList(this.list);
    }
    this.posters = [];
    this.items = [];
    this.searchResults = [];
  }

  onDelete() {
    this.listService.deleteList(this.list);
    this.onClear();
    this.posters = [];
    this.items = [];
    this.searchResults = [];
  }

  onClear() {
    this.isAdd = true;
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
