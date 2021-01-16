import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { RegisterComponent } from './register/register.component';
import {AngularFireAuthGuard,redirectUnauthorizedTo} from '@angular/fire/auth-guard'
const redirectLogin = ()=> redirectUnauthorizedTo(["login"]);
const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent, canActivate:[AngularFireAuthGuard],data: { authGuardPipe: redirectLogin}},
  { path: 'add', component: AddTutorialComponent, canActivate:[AngularFireAuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
