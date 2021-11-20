import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentservicesService } from '../studentservices.service';

@Component({
  selector: 'app-studentedit',
  templateUrl: './studentedit.component.html',
  styleUrls: ['./studentedit.component.css']
})
export class StudenteditComponent implements OnInit {

  public studentData: any = {};
  public eid: any = this.aroute.snapshot.params['st_id'];


  public selectedId: any;
  constructor(private restApi: StudentservicesService,
    private router: Router,
    private aroute: ActivatedRoute) { }

  ngOnInit(): void {

    console.log('from ng onint ' + this.eid + this.selectedId);
    this.restApi.getStudent(this.eid).subscribe((data) => {
      this.studentData = data;
      console.log('from ng oninit ' + this.eid + this.selectedId);
  });
  }

  updateStudent() {
    console.log('employee data ---' + this.studentData);
    this.restApi
      .updateStudent(this.studentData)
      .subscribe((data: {}) => this.router.navigate(['/studentlist']));
  }

  goToStudents() {
    this.router.navigate(['/studentlist']);
  }

}
