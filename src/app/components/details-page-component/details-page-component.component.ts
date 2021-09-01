import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BookClass } from 'src/app/Model/book-class';
import { Store,select } from '@ngrx/store';
import * as BookActions from 'src/app/state/book.actions';
import *  as fromBook from 'src/app/state/book.reducer';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-details-page-component',
  templateUrl: './details-page-component.component.html',
  styleUrls: ['./details-page-component.component.scss']
})
export class DetailsPageComponentComponent implements OnInit {
  
  constructor(private activeRoute : ActivatedRoute,private store:Store<fromBook.AppState>, private service: ServiceService ) { }
  
  id!: number | null;
  book$: Observable<BookClass> | undefined ;
  book!: BookClass;
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params =>
      {this.id = params['id'] as number});
    this.store.dispatch(new BookActions.LoadBookByID(this.id as number));
    this.book$ = this.store.pipe(select(fromBook.getCurrentBook)) as Observable<BookClass>;
    this.book$ = this.service.getById(this.id as number);
    this.book$.subscribe((data)=> this.book);
    console.log(this.book);
  }

}
