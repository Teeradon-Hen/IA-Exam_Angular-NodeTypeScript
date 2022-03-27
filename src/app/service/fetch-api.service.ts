import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FetchAPIService {
  //Node Express API
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private http: HttpClient) { }
  getPosts() {
    let url = 'https://jsonplaceholder.typicode.com/posts'
    return this.http.get(url);
  }

  getArea(base:number, height:number) {
    let url = 'http://localhost:4000/area'
    return this.http.post(url, {base , height})
  }

  checkCitizenId(citizenId:string) {
    let url = 'http://localhost:4000/citizenId'
    return this.http.post(url, {citizenId})
  }

  handleError(error : HttpErrorResponse){
    let error_msg = `Error code : ${error.status} Message : ${error.message}`
    return throwError(error_msg)
  }
}
