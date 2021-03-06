import {Component, Input, OnChanges} from '@angular/core';
import {List} from "./list";
import {ListService} from "./list.service";
import {MovieService} from "../movies/movie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ml-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.css']
})
export class ListAddComponent implements OnChanges {
  isAdd = true;
  @Input() list: List;
  searchResults: Array<Object>;
  items: string[] = [];

  constructor(private listService: ListService, private movieService: MovieService, private router: Router) { }

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
    this.items = [];
    this.searchResults = [];
  }

  onDelete() {
    this.listService.deleteList(this.list);
    this.onClear();
    this.items = [];
    this.searchResults = [];
  }

  onClear() {
    this.isAdd = true;
    this.router.navigate(['lists']);
  }

  onNavigate(movie){
    this.items.push(movie);
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
