import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentservicesService } from '../studentservices.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
 
  @Input()
  public sub ={
    subject_id:'',
    subject_name:'',
    
  };

  constructor(private eservice: StudentservicesService,
    private router: Router,
    private aroute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  addSubject(){

    this.eservice
     .createSubject(this.sub)
     .subscribe((data: {}) => this.router.navigate(['/view-subject']));
 }

  goToSubjects() {
    this.router.navigate(['/view-subject']);
  }
}
