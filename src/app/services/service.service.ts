import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookClass } from '../Model/book-class';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  static getBooks(): any {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) { }
  url : string = "http://localhost:3000/books";
  getAll(): Observable<BookClass[]>{
  
    return this.http.get<BookClass[]>(this.url);
  } 
  getById(id : number): Observable<BookClass>{
    return this.http.get<BookClass>(this.url +"?id="+id);
  }
  getByAuthor(Author : string): Observable<BookClass[]>{
    return this.http.get<BookClass[]>(this.url +"?Author="+Author);
  }
  save (book : BookClass) : Observable<BookClass>{
    return this.http.post<BookClass>(this.url, book);
  }
  delete (id : number): Observable<string>{
    return this.http.delete<string>(this.url+'/'+id);
  }
}
