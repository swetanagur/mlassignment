import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Student} from "./student";
import {Observable, of, throwError} from "rxjs";
import {catchError, retry, tap} from "rxjs/operators";
import {Singlestudent} from "./singlestudent";


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  Student: Student

  private studentsUrl = 'https://sis-rest-api.herokuapp.com/api/students';

  constructor(private http: HttpClient) {
  }


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl).pipe(
      catchError(this.handleError<Student[]>('getStudents', []))
    );
  }


  updateStudent(student:Student): Observable<any> {

    return this.http.put<any>(`${this.studentsUrl}/${student.id}`,{name:student.name,age:student.age,class:student.class,section:student.section,address:student.address,courseId:student.courseId}, this.httpOptions).pipe(tap(data => console.log("Data from the put request:", data)), catchError(this.handleError<any>('update student')));
  }

  getStudent(id: number): Observable<Student> {
    const url = `${this.studentsUrl}/${id}`;
    return this.http.get<Student>(url);
  }

  addStudent(student:Student): Observable<Student>{
    return this.http.post<Student>(this.studentsUrl,student,this.httpOptions)
  }


  deleteStudent(id: number): Observable<Student>{


    const url = `${this.studentsUrl}/${id}`;
    return this.http
      .delete<Student>(url, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError<any>('delete student'))
      )


  }




  private handleError<T>(operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
