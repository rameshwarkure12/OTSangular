import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentservicesService } from '../studentservices.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  @Input()
  public quizData ={
    qid:'',
    title:'',
    maxMarks:'',
    numberOfQuestions:'',
    subject:{subject_id:''},
    test_date:''
};

public sid:any=this.aroute.snapshot.params['this.quizData.subject.subject_id'];

  constructor(private restApi:StudentservicesService,
    public router:Router,
    private formBuilder: FormBuilder,
    private aroute:ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  addQuiz()
  {

    this.restApi
      .createQuiz(this.quizData)
      .subscribe((data: {}) => this.router.navigate(['/view-quiz']));

  }

}
