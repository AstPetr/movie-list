import { Component, OnInit } from '@angular/core';
import {List} from "../list";
import {ListService} from "./list.service";

@Component({
  selector: 'ml-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit{
  lists: List[] = [];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.lists = this.listService.getLists();
  }


}
