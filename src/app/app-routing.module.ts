import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToonGebruikersComponent } from './toon-gebruikers/toon-gebruikers.component';

const routes: Routes = [
  { path: 'gebruikers', component: ToonGebruikersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
