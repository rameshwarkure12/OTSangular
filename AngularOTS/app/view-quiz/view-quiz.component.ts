import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'src/subject';
import { StudentservicesService } from '../studentservices.service';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent implements OnInit {
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

  onDelete(emp: Subject) { 
    this.selectedId = emp.qid;
    console.log(this.selectedId);
    if (window.confirm('Are your sure, you want to delete this quiz?')) {
      this.eservice.deleteQuiz(this.selectedId).subscribe((data) => {
        this.router.navigate(['/view-quiz']);
      });
    }
  }


 

}
