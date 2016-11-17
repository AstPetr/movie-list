import { Injectable } from '@angular/core';
import {List} from "./list";
import 'rxjs/Rx';

@Injectable()
export class ListService {
  // Sarasu masyvas
  private lists: List[] = [];
  //   = [
  //   new List('Name', ['264660', '157336']),
  //   new List('Name2', ['162','1995','270303'])
  // ];
  constructor() { }

  // Pasiimti visam sarasu masyvui
  getLists() {
    return this.lists;
  }
  // Pasiimti tam tikra sarasa pagal indeksa
  getList(id: number) {
    return this.lists[id];
  }
  // Prideti sarasa i sarasu masyva
  addList(list: List) {
    this.lists.push(list);
  }
  // Istrinti sarasa is sarasu masyvo
  deleteList(list: List) {
    this.lists.splice(this.lists.indexOf(list), 1);
  }
  // Redaguoti sarasa
  editList(oldList: List, newList: List) {
    this.lists[this.lists.indexOf(oldList)].name = newList.name;
    Array.prototype.push.apply(this.lists[this.lists.indexOf(oldList)].items, newList.items);
  }
  deleteListId(id: string, pageid: number) {
    this.lists[pageid].items.splice( this.lists[pageid].items.indexOf(id), 1);
  }

}
