import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{ HttpModule} from '@angular/http'; 
import{NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';
import { TeamsptComponent } from './teamspt/teamspt.component';
import { TeamschComponent } from './teamsch/teamsch.component';
import { TeamschService } from './teamsch/teamsch.service';
import { TeamsptService } from './teamspt/teamspt.service';
import { HomeComponent } from './home/home.component';
import { EquipaComponent } from './equipa/equipa.component';
import { EquipaService } from './equipa/equipa.service';
import { HomeService } from './home/home.service';


@NgModule({
  declarations: [
    AppComponent,
 
    TeamsptComponent,
    TeamschComponent,
    HomeComponent,
    EquipaComponent,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(), 
  ],
  providers:[TeamschService,TeamsptService,EquipaService,HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
