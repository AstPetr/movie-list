import { Component, OnInit } from '@angular/core';
import {List} from "../list";
import {ListService} from "./list.service";

@Component({
  selector: 'ml-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.css']
})
export class ListAddComponent implements OnInit {
  isAdd = true;
  list: List;

  constructor(private listService: ListService) { }

  ngOnInit() {
  }

  onSubmit(list: List) {
    list.items = ['12', '14'];
    if(!this.isAdd) {
      // edit
    } else {
    this.list = new List(list.name, list.items);
      this.listService.addList(this.list);
    }
  }

}
