export interface Quiz{
    question_id: number;

    qid:number;
    title:string;
    maxMarks:number;
    numberOfQuestions:number;
    
    subject: {
        //qid: number;
        subject_id:number;
        subject_name:string;
      }

    test_date:Date;


}



