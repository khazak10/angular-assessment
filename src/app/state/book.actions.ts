import { Action } from "@ngrx/store";
import { BookClass } from "../Model/book-class";
export enum BooksActionTypes {
    LOAD_BOOK = "[BookClass] Load books",
    LOAD_BOOK_SUCCESS = "[BookClass] Load books success",
    LOAD_BOOK_Fail = "[BookClass] Load books fail",
    LOAD_BOOK_BY_ID = "[BookClass] Load book",
    LOAD_BOOK_SUCCESS_BY_ID = "[BookClass] Load book success",
    LOAD_BOOK_Fail_BY_ID = "[BookClass] Load book fail",
    LOAD_BOOK_BY_AUTHOR = "[BookClass] Load books Auth",
    LOAD_BOOK_SUCCESS_BY_AUTHOR = "[BookClass] Load books Auth success",
    LOAD_BOOK_Fail_BY_AUTHOR = "[BookClass] Load books Auth fail",
    CREATE_BOOK = "[BookClass] Create book",
    CREATE_BOOK_SUCCESS = "[BookClass] Create book success",
    CREATE_BOOK_Fail = "[BookClass] Create book fail",
    DELETE_BOOK = "[BookClass] Delete book",
    DELETE_BOOK_SUCCESS = "[BookClass] Delete book success",
    DELETE_BOOK_Fail = "[BookClass] Delete book fail"
}
export class LoadBooks implements Action {
    readonly type = BooksActionTypes.LOAD_BOOK;
}
export class LoadBooksSuccess implements Action {
    readonly type = BooksActionTypes.LOAD_BOOK_SUCCESS;
    constructor(public payload: BookClass[]) { }
}
export class LoadBooksFail implements Action {
    readonly type = BooksActionTypes.LOAD_BOOK_Fail;
    constructor(public payload: string) { }
}

/*********** Book By ID ************/
export class LoadBookByID implements Action {
    readonly type = BooksActionTypes.LOAD_BOOK_BY_ID;
    constructor(public payload: number) { }
}
export class LoadBookSuccessById implements Action {
    readonly type = BooksActionTypes.LOAD_BOOK_SUCCESS_BY_ID;
    constructor(public payload: BookClass) { }
}
export class LoadBooksFailByID implements Action {
    readonly type = BooksActionTypes.LOAD_BOOK_Fail_BY_ID;
    constructor(public payload: string) { }
}

/******** Get By Author **************/
export class LoadBookByAuthor implements Action {
    readonly type = BooksActionTypes.LOAD_BOOK_BY_AUTHOR;
    constructor(public payload: string) { }
}
export class LoadBooksSuccessByAuthor implements Action {
    readonly type = BooksActionTypes.LOAD_BOOK_SUCCESS_BY_AUTHOR;
    constructor(public payload: BookClass[]) { }
}
export class LoadBooksFailByAuthor implements Action {
    readonly type = BooksActionTypes.LOAD_BOOK_Fail_BY_AUTHOR;
    constructor(public payload: string) { }
}
/*** Create Book ****/
export class CreateBook implements Action {
    readonly type = BooksActionTypes.CREATE_BOOK;
    constructor(public payload: BookClass) {}
}
export class CreateBookSuccess implements Action {
    readonly type = BooksActionTypes.CREATE_BOOK_SUCCESS;
    constructor(public payload: BookClass) { }
}
export class CreateBookFail implements Action {
    readonly type = BooksActionTypes.CREATE_BOOK_Fail;
    constructor(public payload: string) { }
}
/******** Delete **************/
export class DeleteBook implements Action {
    readonly type = BooksActionTypes.DELETE_BOOK;
    constructor(public payload: number) {}
}
export class DeleteBookSuccess implements Action {
    readonly type = BooksActionTypes.DELETE_BOOK_SUCCESS;
    constructor(public payload: string) { }
}
export class DeleteBookFail implements Action {
    readonly type = BooksActionTypes.DELETE_BOOK_Fail;
    constructor(public payload: string) { }
}




export type Actions = 
    | LoadBooks
    | LoadBooksSuccess
    | LoadBooksFail
    | LoadBookByAuthor
    | LoadBooksSuccessByAuthor
    | LoadBooksFailByAuthor
    | LoadBookByID
    | LoadBooksFailByID
    | LoadBookSuccessById
    | CreateBook
    | CreateBookSuccess
    | CreateBookFail
    | DeleteBook
    | DeleteBookSuccess
    | DeleteBookFail;