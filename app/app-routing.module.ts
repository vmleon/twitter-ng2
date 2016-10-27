import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { UsersComponent } from './user/users.component';
import { UserDetailComponent } from './user/user-detail.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-detail/:id', component: UserDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
