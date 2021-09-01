import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store,select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookClass } from 'src/app/Model/book-class';
import * as BookActions from 'src/app/state/book.actions';
import *  as fromBook from 'src/app/state/book.reducer';
@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.scss']
})
export class AuthorPageComponent implements OnInit {

  constructor(private activeRoute : ActivatedRoute,private store:Store<fromBook.AppState>) { }
  author!: string;
  books$!: {};
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params =>
      {this.author = params['Author'] });
      this.store.dispatch(new BookActions.LoadBookByAuthor(this.author as string));
      this.store.subscribe(state => this.books$ = state.bookStat.entities);
      console.log(this.books$);
  }

}
