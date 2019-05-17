import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentName:string;
  parent : string;
  serParent:string;
  
  constructor(private service:SharedService) { }

  ngOnChanges(){
    console.log('OnChanges',this.parentName);
    this.parent = this.parentName; //To get value using @Input
    this.getParentName(); //To get from service
  }

  ngOnInit() {
  }

  //Get Parent Name from service
  getParentName():void{
    this.service.getParentName().subscribe(data => this.serParent = data);
  }

}
