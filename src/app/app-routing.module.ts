import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgersComponent } from './burgers/burgers.component';
import { BurgerDetailComponent } from './burger-detail/burger-detail.component'

const routes: Routes = [
  { path: 'detail/:id', component: BurgerDetailComponent },
  { path: 'burgers', component: BurgersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }