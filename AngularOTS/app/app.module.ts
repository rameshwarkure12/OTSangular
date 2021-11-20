import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { ExamComponent } from './exam/exam.component';
import { ResultComponent } from './result/result.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudenteditComponent } from './studentedit/studentedit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SortDirective } from './directive/sort.directive';
import { ViewSubjectComponent } from './view-subject/view-subject.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ViewQuizComponent } from './view-quiz/view-quiz.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ViewStSubjectComponent } from './view-st-subject/view-st-subject.component';
import { ViewStQuizComponent } from './view-st-quiz/view-st-quiz.component';
import { ViewStTestComponent } from './view-st-test/view-st-test.component';
import { AdminComComponent } from './admin-com/admin-com.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    RegisterComponent,
    ServicesComponent,
    ExamComponent,
    ResultComponent,
    AdminloginComponent,
    StudentlistComponent,
    StudenteditComponent,
    SortDirective,
    ViewSubjectComponent,
    AddSubjectComponent,
    ViewQuizComponent,
    AddQuizComponent,
    ViewQuestionComponent,
    AddQuestionComponent,
    ViewStSubjectComponent,
    ViewStQuizComponent,
    ViewStTestComponent,
    AdminComComponent,
    
   
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule, 
    MatToolbarModule,
    MatIconModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
