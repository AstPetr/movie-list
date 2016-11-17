import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ListService} from "../list.service";

@Component({
  selector: 'ml-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // list: List;
  movieList: Array<Object> = [];
  pageid: number;

  onNavigate(movie) {
    this.router.navigate(['/movie/'+movie.id]);
  }

  onDelete(movie) {
    this.listService.deleteListId(movie, this.pageid);
  }

  constructor(private activatedRouter: ActivatedRoute, private router: Router, private listService: ListService) { }

  getMovies() {
    // rezultatai ne is eiles - fix!!!
    this.activatedRouter.params.subscribe((params) => {
      let id = params['id'];
      this.movieList = [];
      let items = this.listService.getList(id).items;
      if (items) {
        this.movieList = items;
      }
      this.pageid = id;
    });
  }

  ngOnInit() {
    this.getMovies();
  }

}

