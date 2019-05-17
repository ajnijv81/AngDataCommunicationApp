import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  parentName:string;
  constructor() { }

  //Set Parent Name
  setParentName(name){
     this.parentName = name;
  }

  //Get Parent Name for use in child and grandchild
  getParentName(): Observable<string> {
    return of(this.parentName);
  }
}
