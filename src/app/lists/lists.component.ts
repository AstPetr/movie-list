import { Component, OnInit } from '@angular/core';
import {List} from "./list";
import {ListService} from "./list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ml-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit{
  lists: List[] = [];
  selectedList: List = null;

  constructor(private listService: ListService, private router: Router) { }

  ngOnInit() {
    this.lists = this.listService.getLists();
  }

  onNavigate(list: List, id){
    this.router.navigate(['lists/'+ id]);
    this.selectedList = list;
  }

}
