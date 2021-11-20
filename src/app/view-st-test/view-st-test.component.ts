import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentservicesService } from '../studentservices.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-view-st-test',
  templateUrl: './view-st-test.component.html',
  styleUrls: ['./view-st-test.component.css']
})
export class ViewStTestComponent implements OnInit {
  public questions=[] as any;
  selectedId: number=0;
  question_id:any;
  quiz:any={};
  age='';
  selectControl:FormControl = new FormControl()
  var:number=0;
  
  data:number =0;

  
  
  
  public subid:any=this.aroute.snapshot.params['qid'];
  
  

  constructor(private eservice :StudentservicesService,
    private router: Router,
    private aroute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    console.log("subid from question.ts ="+this.subid)
    this.eservice.getQuestionFromService(this.subid).subscribe((data)=>(this.questions=data));
    console.log(this.questions);

   console.log()
   
  }
  
  getRandomNumberBetween():number{
    return Math.floor(Math.random()*(4-0+1)+0);
}
  analysis()
  {
    console.log("this.subid = "+this.subid);
    console.log( this.getRandomNumberBetween());
  }


  




}
