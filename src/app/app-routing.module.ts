import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path: "homepage",component:HomepageComponent},
  {path: "form", component: FormComponent},
  {path: "update/:id",component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
