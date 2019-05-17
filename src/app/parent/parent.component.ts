import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { DataService } from '../data.service';
import { Parent } from '../parent';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  name:string;
  show:boolean = false;
  parents:Array<Parent>;
  constructor(private service:SharedService,private dataService:DataService) { }

  ngOnInit(){
    //this.getParentDataFromService();
  }
  //To show the Child and send Parent Name to service
  toggleChild(name){
    this.show = true; 
    this.name = name;
    this.sendParentNameToService(name);
  }

  //Send Parent Name to service
  sendParentNameToService(name){
    this.service.setParentName(name);  
  }

  // getParentDataFromService(){
  //   this.dataService.getParents().subscribe( data => this.parents = data);
  // }

}
