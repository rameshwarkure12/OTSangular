import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentservicesService } from '../studentservices.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  @Input()
  public questionData ={
    question_id:'',
    qdescription:'',
    op1:'',
    op2:'',
    op3:'',
    op4:'',
    answer:'',
    quiz:{qid:''},
    
};



  
  public eid: any = this.aroute.snapshot.params['this.question.quiz.qid'];
  
  public selectedId: any;
  constructor(private restApi: StudentservicesService,
    private router: Router,
    private aroute: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  addQuestion()
  {

    this.restApi
      .createQuestion(this.questionData)
      .subscribe((data: {}) => this.router.navigate(['/view-question']));


  }
  

  
}
