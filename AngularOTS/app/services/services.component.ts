import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(public router :Router,private aroute:ActivatedRoute) { }

  public services=[
      {id:1 ,name:'exam'},
    {id:2,name:'result'}
  ];


  ngOnInit(): void {
  }

 

  showExam()
  {
    this.router.navigate(['./exam'],{relativeTo:this.aroute});
  }
  showResult()
  {
    this.router.navigate(['./result'],{relativeTo:this.aroute});
  }



}
