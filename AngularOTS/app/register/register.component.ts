import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentservicesService } from '../studentservices.service';

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
    console.log("user = "+this.user);
    let k:any;
    
    //let isEmpty =  Object.entries(this.user).every(([k,v]) => v === null)
    
    let isEmpty:boolean =false;
    
    
    
    
    this.restApi
      .createEmployee(this.user)
      .subscribe((data: {}) => this.router.navigate(['/studentlist']));
  }
}
