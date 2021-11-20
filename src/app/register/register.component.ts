import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentservicesService } from '../studentservices.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input()
  public user ={
    st_firstName:'',
    st_lastName:'',
    st_email:'',
    st_password:'',
    st_gender:'',
    st_contact:'',
    dob:''
    
  };
  
  
  
  constructor(private restApi:StudentservicesService,public router:Router,private formBuilder: FormBuilder) {
    
   }

  
  
  ngOnInit(): void {
    
  }

  addStudent(){
    // console.log("user = "+this.user);
    // let k:any;
    
    // //let isEmpty =  Object.entries(this.user).every(([k,v]) => v === null)
    
    // let isEmpty:boolean =false;

    if(this.user.dob=='' || this.user.st_contact=='' 
    || this.user.st_email=='' || 
    this.user.st_firstName=='' || 
    this.user.st_lastName==''  || 
    this.user.st_gender=='' || this.user.st_password==''){

      Swal.fire({
        title: 'Error!',
        text: 'Enter all fields',
        icon: 'error',
        confirmButtonText: 'Ok'
      }); 

    }

    else if((this.user.st_contact).toString().length>10 ||  (this.user.st_contact).toString().length<10 )
    {

      Swal.fire({
        title: 'Error!',
        text: 'Enter correct contact number(must be equal to 10 digits) ',
        icon: 'error',
        confirmButtonText: 'Ok'
      }); 

    }

    else if((this.user.st_password).length >14 || (this.user.st_password).length<8){

      Swal.fire({
        title: 'Error!',
        text: 'password must be greater than 8 and less than 14 ',
        icon: 'error',
        confirmButtonText: 'Ok'
      });

    }
    
    
    else{

      this.restApi
      .createEmployee(this.user)
      .subscribe((data: {}) => this.router.navigate(['/studentlist']));

    }
    
   
  }
}
