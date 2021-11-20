import { Injectable } from '@angular/core';
import { Student } from 'src/student';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { catchError, Observable, retry, throwError } from 'rxjs';
import { Subject } from 'src/subject';
import { Quiz } from 'src/quiz';
import { Question } from 'src/question';

@Injectable({
  providedIn: 'root'
})
export class StudentservicesService {
 
  

  private sturestUrl: string = 'http://localhost:8080/OTS_WebApp/student';
  private subrestUrl: string = 'http://localhost:8080/OTS_WebApp/subject';
  private quizrestUrl: string = 'http://localhost:8080/OTS_WebApp/quiz';
  private quesrestUrl: string = 'http://localhost:8080/OTS_WebApp/question';


  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
     
  createEmployee(student: any): Observable<Student> {
    console.log("from createEmployee()"+student)
    return this.http
      .post<Student>(
        this.sturestUrl + '/createStudent',
        JSON.stringify(student),
        this.httpOptions
      )
   
}

createSubject(sub:any):Observable<Subject> {
  console.log("from createSubject()"+sub)
  return this.http
    .post<Subject>(
      this.subrestUrl + '/createSubject',
      JSON.stringify(sub),
      this.httpOptions
    )
 
}

createQuiz(qz:any)
{
  console.log("from createQuiz()"+qz)
  return this.http
    .post<Quiz>(
      this.quizrestUrl + '/createQuiz',
      JSON.stringify(qz),
      this.httpOptions
    )

}

createQuestion(qs:any)
{
  console.log("from createQuiz()"+qs)
  return this.http
    .post<Quiz>(
      this.quesrestUrl + '/createQuestion',
      JSON.stringify(qs),
      this.httpOptions
    )

}








getEmployeeFromService(): Observable<Student[]> {
  console.log()
  return this.http.get<Student[]>(this.sturestUrl + '/allstu')

  
}

findStudent(stu:any):Observable<Student>
{
  console.log("stu = "+stu);
  return this.http.get<Student>(this.sturestUrl+'/validateStu/'+stu);
  // console.log("abc from service = "+abc.st_password);
  // return abc;
}



getSubjectFromService():Observable<Subject[]>{
  return this.http.get<Subject[]>(this.subrestUrl+'/allsub')
}



getQuizFromService(subid:any):Observable<Quiz[]>{
  return this.http.get<Quiz[]>(this.quizrestUrl+'/allquiz/'+subid)
}


getQuestionFromService(quid:any):Observable<Question[]>{
  console.log("quid = "+quid)
  return this.http.get<Question[]>(this.quesrestUrl+'/allquestion/'+quid)
  
}








deleteEmployee(eid: number) {
  return this.http.delete<Student>(
    this.sturestUrl + '/deleteStudent/' + eid,
    this.httpOptions
  ).pipe(retry(1), catchError(this.handleError));
}

deleteQuiz(eid: number){
  return this.http.delete<Quiz>(
    this.quizrestUrl + '/deleteQuiz/' + eid,
    this.httpOptions
  ).pipe(retry(1), catchError(this.handleError));
}

deleteQuestion(eid:number)
{
  return this.http.delete<Question>(
    this.quesrestUrl + '/deleteQuestion/' + eid,
    this.httpOptions
  ).pipe(retry(1), catchError(this.handleError));

}







updateStudent(student: any): Observable<Student> {
  console.log('from service update() ' + student);
  return this.http.put<Student>(
    this.sturestUrl + '/updateStudent',
    JSON.stringify(student),
    this.httpOptions
  ).pipe(retry(1), catchError(this.handleError));
  
}

getStudent(eid: any): Observable<Student> {
  return this.http.get<Student>(
    this.sturestUrl + '/byIdStudent/' + eid,
    this.httpOptions
  ).pipe(retry(1), catchError(this.handleError));
}




handleError(error: any) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Codeeee : ${error.status} \n Error Messageeee : ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}






}
