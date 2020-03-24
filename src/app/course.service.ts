import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, retry, tap} from "rxjs/operators";
import {Course} from "./course";
import {Observable, of} from "rxjs";
import {Student} from "./student";


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courseUrl = 'https://sis-rest-api.herokuapp.com/api/courses';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  getCourses(){
    return this.http.get<Course[]>(this.courseUrl).pipe(
      catchError(this.handleError<Course[]>('getCourses', []))
    );
  }

  addCourse(course:Course): Observable<Course>{
    return this.http.post<Course>(this.courseUrl,course,this.httpOptions)
  }



  getCourse(id: number): Observable<Course> {
    const url = `${this.courseUrl}/${id}`;
    return this.http.get<Course>(url);
  }



  updateCourse(course:Course): Observable<any> {

    return this.http.put<any>(`${this.courseUrl}/${course.id}`,{name:course.name,duration:course.duration,fee:course.fee,startDate:course.startDate}, this.httpOptions).pipe(tap(data => console.log("Data from the put request:", data)), catchError(this.handleError<any>('update student')));
  }

  deleteCourse(id: number): Observable<Course>{


    const url = `${this.courseUrl}/${id}`;
    return this.http
      .delete<Course>(url, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError<any>('delete Course'))
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
