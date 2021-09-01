import * as BooksActions from "./book.actions";
import { BookClass } from "../Model/book-class";
import * as fromRoot from "../state/app-state";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export interface BookState extends EntityState<BookClass> {
    selectedBookId : number | null,
    loading: boolean,
    loaded: boolean,
    error: string
}
export interface AppState extends fromRoot.AppState {
    bookStat : BookState;
}
export const booksAdapter : EntityAdapter<BookClass> = createEntityAdapter<BookClass>();
export const defaultBook: BookState ={
    ids : [],
    entities :{},
    selectedBookId : null,
    loading: false,
    loaded: false,
    error: ""
}
export const initialState: BookState = booksAdapter.getInitialState(defaultBook);

export function bookReducer(state = initialState, action: BooksActions.Actions): BookState {
   switch(action.type){
    case BooksActions.BooksActionTypes.LOAD_BOOK :{
        return {
            ...state,
            loading : true
        }
    }
    case BooksActions.BooksActionTypes.LOAD_BOOK_SUCCESS :{
        return booksAdapter.setAll(action.payload,{
            ...state,
            loading : false,
            loaded :true,
        });
   }
   case BooksActions.BooksActionTypes.LOAD_BOOK_Fail :{
    return {
        ...state,
        entities :{},
        loading : false,
        loaded: false,
        error: action.payload
    };
} case BooksActions.BooksActionTypes.LOAD_BOOK_BY_ID :{
    return {
        ...state,
        loading : true
    }
}
case BooksActions.BooksActionTypes.LOAD_BOOK_SUCCESS_BY_ID :{
    return  booksAdapter.addOne(action.payload,{
        ...state,
       selectedBookId :action.payload.id,
    });
}
case BooksActions.BooksActionTypes.LOAD_BOOK_Fail_BY_ID :{
return {
    ...state,
    error: action.payload
};
}case BooksActions.BooksActionTypes.LOAD_BOOK_BY_AUTHOR :{
    return {
        ...state,
        loading : true
    }
}
case BooksActions.BooksActionTypes.LOAD_BOOK_SUCCESS_BY_AUTHOR :{
    return  booksAdapter.setAll(action.payload,{
        ...state,
        loading : false,
        loaded :true,
    });
}
case BooksActions.BooksActionTypes.LOAD_BOOK_Fail_BY_AUTHOR :{
return {
    ...state,
    entities:{},
    loading : false,
    loaded: false,
    error: action.payload
};
}case BooksActions.BooksActionTypes.CREATE_BOOK :{
    return {
        ...state,
        loading : true
    }
}
case BooksActions.BooksActionTypes.CREATE_BOOK_SUCCESS :{
    return  booksAdapter.addOne(action.payload, state);
}
case BooksActions.BooksActionTypes.CREATE_BOOK_Fail :{
return {
    ...state,
    entities:{},
    loading : false,
    loaded: false,
    error: action.payload
};
}
case BooksActions.BooksActionTypes.DELETE_BOOK :{
    return {
        ...state,
        loading : true
    }
}
case BooksActions.BooksActionTypes.DELETE_BOOK_SUCCESS :{
    return  booksAdapter.removeOne(action.payload, state);
}
case BooksActions.BooksActionTypes.DELETE_BOOK_Fail :{
return {
    ...state,
    entities:{},
    loading : false,
    loaded: false,
    error: action.payload
};
}
default: {
    return state;
}
   }
}
const getBooksFeatureState = createFeatureSelector<BookState>(
    "Book"
  );
  
  export const getBooks = createSelector(
    getBooksFeatureState,
    booksAdapter.getSelectors().selectAll 
  );
  
  export const getBooksLoading = createSelector(
    getBooksFeatureState,
    (state: BookState) => state.loading
  );
  
  export const getBooksLoaded = createSelector(
    getBooksFeatureState,
    (state: BookState) => state.loaded
  );
  
  export const getError = createSelector(
    getBooksFeatureState,
    (state: BookState) => state.error
  );
  export const getCurrentBookId = createSelector(
      getBooksFeatureState,
      (state : BookState)=> state.selectedBookId
  ); 
  export const getCurrentBook= createSelector(
      getBooksFeatureState,
      getCurrentBookId,
      state => state.entities[state.selectedBookId as number]
  );