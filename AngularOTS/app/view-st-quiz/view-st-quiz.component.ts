import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'src/subject';
import { StudentservicesService } from '../studentservices.service';

@Component({
  selector: 'app-view-st-quiz',
  templateUrl: './view-st-quiz.component.html',
  styleUrls: ['./view-st-quiz.component.css']
})
export class ViewStQuizComponent implements OnInit {

  public quizes=[] as any;
  selectedId: number=0;
  qid:any;
  subject:any={};

  public subid:any=this.aroute.snapshot.params['subject_id'];

  constructor(private eservice :StudentservicesService,
    private router: Router,
    private aroute:ActivatedRoute
    ) { }

  ngOnInit(): void {

    console.log(this.subid)
    this.eservice.getQuizFromService(this.subid).subscribe((data)=>(this.quizes=data));
  }

  takeTest(emp: Subject) { 
    this.selectedId = emp.qid;
    console.log(this.selectedId);
    
      this.eservice.getQuestionFromService(this.selectedId).subscribe((data) => {
        this.router.navigate(['/view-st-test']);
      });
    }
  }


