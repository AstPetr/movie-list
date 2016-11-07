import { Injectable } from '@angular/core';
import {List} from "../list";

@Injectable()
export class ListService {
  // Sarasu masyvas
  private lists: List[] = [
    new List('Name', ['arefef', 'ewrferf']),
    new List('Name2', ['arefef', 'ewrferf', 'dgfdkgmgkh'])
  ];
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
  //
  // searchLists(query: string) {
  //   this.lists.find(f)
  // }



}
