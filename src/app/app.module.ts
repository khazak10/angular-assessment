import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { TabMenuComponentComponent } from './components/tab-menu-component/tab-menu-component.component';
import { TablePageComponentComponent } from './components/table-page-component/table-page-component.component';
import { FormPageComponentComponent } from './components/form-page-component/form-page-component.component';
import { DetailsPageComponentComponent } from './components/details-page-component/details-page-component.component';
import { AuthorPageComponent } from './components/author-page/author-page.component';
import { HistoryComponent } from './components/history/history.component';
import { TabMenuModule } from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {bookReducer} from './state/book.reducer';
import { BookEffect } from './state/book.effect';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    TabMenuComponentComponent,
    TablePageComponentComponent,
    FormPageComponentComponent,
    DetailsPageComponentComponent,
    AuthorPageComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    TabMenuModule,
    TableModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    EffectsModule.forFeature([BookEffect]),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature("Book",bookReducer),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
