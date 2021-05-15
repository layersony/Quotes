import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteComponent } from './quote/quote.component'

const routes: Routes = [
  {
    path: 'addquote',
    component: QuoteFormComponent,
  },
  {
    path: 'home',
    component: QuoteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
