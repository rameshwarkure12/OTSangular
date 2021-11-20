import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AdminComComponent } from './admin-com/admin-com.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ExamComponent } from './exam/exam.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ResultComponent } from './result/result.component';
import { ServicesComponent } from './services/services.component';
import { StudenteditComponent } from './studentedit/studentedit.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { ViewQuizComponent } from './view-quiz/view-quiz.component';
import { ViewStQuizComponent } from './view-st-quiz/view-st-quiz.component';
import { ViewStSubjectComponent } from './view-st-subject/view-st-subject.component';
import { ViewStTestComponent } from './view-st-test/view-st-test.component';
import { ViewSubjectComponent } from './view-subject/view-subject.component';




const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'studentlist', component: StudentlistComponent },
  { path: 'studentedit', component: StudenteditComponent },
  { path: 'studentedit/:st_id', component: StudenteditComponent },
  { path: 'add-subject',component:AddSubjectComponent},
  { path: 'view-subject',component:ViewSubjectComponent},
  { path: 'view-quiz',component:ViewQuizComponent},
  { path: 'add-quiz',component:AddQuizComponent},
  {path : 'view-quiz/:subject_id',component:ViewQuizComponent},
  {path :'view-question',component:ViewQuestionComponent},
  {path :'add-question',component:AddQuestionComponent},
  {path :'view-question/:qid',component:ViewQuestionComponent},
  { path: 'view-st-subject',component:ViewStSubjectComponent},
  { path: 'view-st-quiz',component:ViewStQuizComponent},
  { path: 'view-st-test',component:ViewStTestComponent},
  {path : 'view-st-quiz/:subject_id',component:ViewStQuizComponent},
  { path: 'view-st-test/:qid',component:ViewStTestComponent},
  {path: 'admin-com',component:AdminComComponent},
  
  
  {
    path: 'services/:id',
    component: ServicesComponent,
    children: [
      { path: 'exam', component: ExamComponent },
      { path: 'result', component: ResultComponent },
    ],
  },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
