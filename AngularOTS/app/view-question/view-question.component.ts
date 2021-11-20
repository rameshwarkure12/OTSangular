import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/question';
import { Quiz } from 'src/quiz';
import { StudentservicesService } from '../studentservices.service';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {
  public questions=[] as any;
  selectedId: number=0;
  question_id:any;
  quiz:any={};

  
  public subid:any=this.aroute.snapshot.params['qid'];
  

  constructor(private eservice :StudentservicesService,
    private router: Router,
    private aroute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    console.log("subid from question.ts ="+this.subid)
    this.eservice.getQuestionFromService(this.subid).subscribe((data)=>(this.questions=data));
    console.log(this.questions);
  }

  onDelete(emp: Quiz) { 
    this.selectedId = emp.question_id;
    console.log(this.selectedId);
    if (window.confirm('Are your sure, you want to delete this quiz?')) {
      this.eservice.deleteQuestion(this.selectedId).subscribe((data) => {
        this.router.navigate(['/view-question']);
      });
    }



  }
  }
