import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Actions , ofType, Effect} from "@ngrx/effects";
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map,mergeMap } from "rxjs/operators";
import { BookClass } from '../Model/book-class';
import { ServiceService } from '../services/service.service';
import * as BookActions from "../state/book.actions";

@Injectable({
  providedIn: 'root'
})
export class BookEffect {
  constructor(private actions$ :Actions, private bookService :ServiceService){
    
  }
  @Effect()
  loadBooks$: Observable<Action> = this.actions$.pipe(
    ofType<BookActions.LoadBooks>(
      BookActions.BooksActionTypes.LOAD_BOOK
    ),
    mergeMap((action:   BookActions.LoadBooks) =>
      this.bookService.getAll().pipe(
        map(
          (books: BookClass[]) =>
            new BookActions.LoadBooksSuccess(books)
        ),
        catchError((err: string) => of(new BookActions.LoadBooksFail(err)))
      )
    )
  );
  @Effect()
  loadBookById$: Observable<Action> = this.actions$.pipe(
    ofType<BookActions.LoadBookByID>(
      BookActions.BooksActionTypes.LOAD_BOOK_BY_ID
    ),
    mergeMap((action:BookActions.LoadBookByID) =>
      this.bookService.getById(action.payload).pipe(
        map(
          (book: BookClass) =>
            new BookActions.LoadBookSuccessById(book)
        ),
        catchError((err: string) => of(new BookActions.LoadBooksFailByID(err)))
      )
    )
  );
  @Effect()
  loadBookByAuthor$: Observable<Action> = this.actions$.pipe(
    ofType<BookActions.LoadBookByAuthor>(
      BookActions.BooksActionTypes.LOAD_BOOK_BY_AUTHOR
    ),
    mergeMap((actions:   BookActions.LoadBookByAuthor) =>
      this.bookService.getByAuthor(actions.payload).pipe(
        map(
          (books: BookClass[]) =>
            new BookActions.LoadBooksSuccessByAuthor(books)
        ),
        catchError((err: string) => of(new BookActions.LoadBooksFailByAuthor(err)))
      )
    )
  );

 @Effect()
  createBook$: Observable<Action> = this.actions$.pipe(
    ofType<BookActions.CreateBook>(
      BookActions.BooksActionTypes.CREATE_BOOK
    ),
    map((action : BookActions.CreateBook)=> action.payload),
    mergeMap((book: BookClass) =>
      this.bookService.save(book).pipe(
        map(
          (book: BookClass) =>
            new BookActions.CreateBookSuccess(book)
        ),
        catchError((err: string) => of(new BookActions.CreateBookFail(err)))
      )
    )
  );
  @Effect()
  deleteBook$: Observable<Action> = this.actions$.pipe(
    ofType<BookActions.DeleteBook>(
      BookActions.BooksActionTypes.DELETE_BOOK
    ),
    map((action : BookActions.DeleteBook)=> action.payload),
    mergeMap((id: number) =>
      this.bookService.delete(id).pipe(
        map(
          (message: string) =>
            new BookActions.DeleteBookSuccess(message)
        ),
        catchError((err: string) => of(new BookActions.DeleteBookFail(err)))
      )
    )
  );
}