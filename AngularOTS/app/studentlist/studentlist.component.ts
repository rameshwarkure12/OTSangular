import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/student';
import { StudentservicesService } from '../studentservices.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  
  public students=[] as any;
  selectedId: number=0;
  st_id:any;
  student:any={};

  constructor(private eservice :StudentservicesService,private router: Router) { }

  ngOnInit(): void {
    
    
    this.eservice.getEmployeeFromService().subscribe((data)=>(this.students=data));
    console.log("from studentlist = "+this.students)
    
 
  }

  onDelete(emp: Student) {
    this.selectedId = emp.st_id;
    console.log(this.selectedId);
    if (window.confirm('Are your sure, you want to delete?')) {
      this.eservice.deleteEmployee(this.selectedId).subscribe((data) => {
        this.router.navigate(['/studentlist']);
      });
    }
  }

  

  }


