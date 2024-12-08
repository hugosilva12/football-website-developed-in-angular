import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import{RouterModule,Routes} from '@angular/router';

import { TeamsptComponent } from './teamspt/teamspt.component';
import{TeamschComponent} from './teamsch/teamsch.component'
import { HomeComponent } from './home/home.component';
import { EquipaComponent } from './equipa/equipa.component';



const routes: Routes=[ 
  { path:'', redirectTo:'home', pathMatch:'full'  },
  { path:'home', component:HomeComponent},
  { path:'teamspt', component:TeamsptComponent},
  { path:'teamsch', component:TeamschComponent},
  { path:'equipa/:id', component: EquipaComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)
 
  ],
exports:[RouterModule]
})
export class AppRoutingModule { }
