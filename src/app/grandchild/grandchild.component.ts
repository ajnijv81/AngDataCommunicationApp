import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {

  @Input() grandParentName:string;
  gParentName:string;
  
  constructor(private service:SharedService) { }

  ngOnChanges(){
    this.getGrandParentName();
  }

  ngOnInit() {
    this.getGrandParentName();
  }
  getGrandParentName(): void {
    this.service.getParentName()
        .subscribe(data => this.gParentName = data);
  }

}
