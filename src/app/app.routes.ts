import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  { path: 'login', redirectTo: 'public', pathMatch: 'full' },
];
