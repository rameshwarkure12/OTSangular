import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentservicesService } from '../studentservices.service';

@Component({
  selector: 'app-view-subject',
  templateUrl: './view-subject.component.html',
  styleUrls: ['./view-subject.component.css']
})
export class ViewSubjectComponent implements OnInit {
  




  public subjects=[] as any;
  constructor(private eservice :StudentservicesService,private router: Router) { }

  ngOnInit(): void {

    this.eservice.getSubjectFromService().subscribe((data)=>(this.subjects=data));
  }

  

}
