import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  { path: 'landing', loadChildren: () => import('../app/pages/landing/landing.module')
  .then(m => m.LandingPageModule) },
  { path: 'login', loadChildren: () => import('../app/pages/auth/login/login.module')
  .then(m => m.LoginPageModule)},
  { path: 'register', loadChildren: () => import('../app/pages/auth/register/register.module')
  .then(m => m.RegisterPageModule) },
  { path: 'dashboard', loadChildren: () => import('../app/pages/dashboard/dashboard.module')
  .then(m => m.DashboardPageModule), canActivate: [AuthGuard] },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  // { path: 'list', loadChildren: './list/list.module#ListPageModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
