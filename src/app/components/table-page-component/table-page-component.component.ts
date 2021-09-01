import { Component, OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store';
import * as BookActions from 'src/app/state/book.actions';
import { BookClass } from 'src/app/Model/book-class';
import { Observable } from 'rxjs';
import *  as fromBook from 'src/app/state/book.reducer';
@Component({
  selector: 'app-table-page-component',
  templateUrl: './table-page-component.component.html',
  styleUrls: ['./table-page-component.component.scss']
})
export class TablePageComponentComponent implements OnInit {
  books: any;
  books$!: Observable<BookClass[]>;
  errors$!: Observable<string>;
  constructor(private store:Store<fromBook.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new BookActions.LoadBooks());
    this.books$ = this.store.pipe(select(fromBook.getBooks));
    this.errors$= this.store.pipe(select(fromBook.getError));
  }
  onDelete(book : BookClass){
    if(confirm("Are you sure you want to delete this item !"))
    this.store.dispatch(new BookActions.DeleteBook(book.id));
    window.location.href ="table-page";
  }
}
