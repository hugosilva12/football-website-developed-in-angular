import { Component, OnInit } from '@angular/core';
import{TeamsptService} from './teamspt.service';
import{LOG} from './mocks';
import { NgIf } from '@angular/common';
import{ActivatedRoute} from '@angular/router';
import{Location}  from '@angular/common';
@Component({
  selector: 'app-teamspt',
  templateUrl: './teamspt.component.html',
  styleUrls: ['./teamspt.component.css']
})
export class TeamsptComponent implements OnInit {
  [x: string]: any;
  football:{};
  Log:{};
  constructor(private teamsptservice: TeamsptService ) { };
  id:String;

  ngOnInit() {
    this.getFootball();
    this.Log = LOG;
    this.initreturn();
  }
  getFootball(){
    this.teamsptservice.getFootball().subscribe(football => this.football=football);
  }


  getlog(id1){
    for(let team of LOG){
      if(team.id == id1){
      return team.url;
    }

    }
  }
  initreturn(){
const id = this.route.snapshot.paramMap.get('id');
if(id != null){
  this.id=id;
}
  }
  getequi(id1){
    for(let team of LOG){
      if(team.id == id1){
      return team.equi;
    }

    }
  }
}
