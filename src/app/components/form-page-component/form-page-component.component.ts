import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BookClass } from 'src/app/Model/book-class';
import { Observable } from 'rxjs';
import *  as fromBook from 'src/app/state/book.reducer';
import * as BookActions from 'src/app/state/book.actions';
import { Store,select } from '@ngrx/store';
import { BooksActionTypes } from 'src/app/state/book.actions';
@Component({
  selector: 'app-form-page-component',
  templateUrl: './form-page-component.component.html',
  styleUrls: ['./form-page-component.component.scss']
})
export class FormPageComponentComponent implements OnInit {
  book!: BookClass;
  constructor(private formBuilder :FormBuilder ,private store:Store<fromBook.AppState>) { 
  }

  ngOnInit(): void {

  }
  profileForm = this.formBuilder.group({
    id : [''],
    Title: [''],
    Author:['']
  }) 
  ceateBook(){
    this.book = {
      id : this.profileForm.get("id")?.value as number,
      Author : this.profileForm.get("Title")?.value as string,
      Title : this.profileForm.get("Author")?.value as string
    };
    console.log(this.book);
    this.store.dispatch(new BookActions.CreateBook(this.book));
    this.profileForm.reset;
    window.location.href ="table-page";
  }
}
