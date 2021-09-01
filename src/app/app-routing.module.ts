import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { TablePageComponentComponent } from './components/table-page-component/table-page-component.component';
import { DetailsPageComponentComponent } from './components/details-page-component/details-page-component.component';
import { AuthorPageComponent } from './components/author-page/author-page.component';
import { FormPageComponentComponent } from './components/form-page-component/form-page-component.component';
const routes: Routes = [{
  path: '',
  component : HomeComponentComponent
    },
    {
      path: 'table-page',
      component : TablePageComponentComponent
    },
    {
      path: 'Element-details/:id',
      component : DetailsPageComponentComponent,
      pathMatch: 'full'
    },
    {
      path: 'Author-details/:author',
      component : AuthorPageComponent
    },
    {
      path: 'Form',
      component : FormPageComponentComponent
    }
];

@NgModule({
  imports: [BrowserModule,
    BrowserAnimationsModule,
    MessageModule,
    TabMenuModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
