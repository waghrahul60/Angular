import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

import { ProjectComponent } from './project/project.component';
import { EducationComponent } from './education/education.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AchievementComponent } from './achievement/achievement.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'project', component: ProjectComponent },
  { path: 'education', component: EducationComponent },
  { path: 'achievement', component: AchievementComponent },
  { path: 'contact-me', component: ContactMeComponent },

  { path: '', redirectTo: '/project', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
