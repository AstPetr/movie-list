import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ListService} from "../list.service";
import {List} from "../../list";

@Component({
  selector: 'ml-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: List;

  constructor(private router: ActivatedRoute, private listService: ListService) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
        let id = params['id'];
        this.list = this.listService.getList(id);
      }
    )
  }

}
