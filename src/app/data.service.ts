import { Injectable } from '@angular/core';
import { Parent } from './parent';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  parents : Array<Parent>

  constructor() {
      this.parents = [ { id:1, name: 'Parent1'}, { id:2 , name: 'parent2'}]

   }

  getParents(): Observable<Array<Parent>>{
    return of(this.parents);
  }

  
}
