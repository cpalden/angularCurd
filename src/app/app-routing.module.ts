import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArticlesComponent } from './articles/articles.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'edit/:id', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
