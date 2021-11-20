import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/student';
import { StudentservicesService } from '../studentservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedmail: any;
  public student={} as any;

  public valid={
  
    email:'',
    password:''
  } 
  // @Input()
  // public valid ={
  //   st_firstName:'',
  //   st_lastName:'',
  //   st_email:'',
  //   st_password:'',
  //   st_gender:'',
  //   st_contact:'',
  //   dob:''
    
  // };


  constructor(private router: Router, private eservice :StudentservicesService) {}  
  ngOnInit(): void {
    
    //  console.log("from studentlist before subscribing = "+this.student)
    //  this.eservice.getEmployeeFromService().subscribe((data) => (this.student=data));
    //  console.log("this.student after subscribing = "+this.student.st_id);
  }
  
  goToServices() {  

     
      this.selectedmail = this.valid.email;
      console.log("this.selectedmail = "+this.selectedmail);
      this.eservice.findStudent(this.selectedmail).subscribe((data) => {
        this.router.navigate(['/view-st-subject']);
      });
      
     console.log("this.student from gotoservices = "+this.student);

    

        
    }  

    goTorgister(){
      this.router.navigate(['/register']);
    }
   

}
