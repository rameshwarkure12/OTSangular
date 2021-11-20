import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentservicesService } from '../studentservices.service';

@Component({
  selector: 'app-view-st-subject',
  templateUrl: './view-st-subject.component.html',
  styleUrls: ['./view-st-subject.component.css']
})
export class ViewStSubjectComponent implements OnInit {
  public subjects=[] as any;
  constructor(private eservice :StudentservicesService,private router: Router) { }

  ngOnInit(): void {

    this.eservice.getSubjectFromService().subscribe((data)=>(this.subjects=data));
  }

}
