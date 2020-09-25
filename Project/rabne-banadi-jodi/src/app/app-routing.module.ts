import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MyhomeComponent } from './myhome/myhome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MainComponent } from './main/main.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AllusersComponent } from './allusers/allusers.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  { path: '', component: MyhomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userdetails', component: UserDetailsComponent },
  { path: 'demo', component: DemoComponent },

  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'users', component: AllusersComponent },
    ],
  },

  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
