import { Component, OnInit } from '@angular/core';
import{TeamschService} from './teamsch.service';
import{LOG} from './mocks';
import { NgIf } from '@angular/common';
import{ActivatedRoute} from '@angular/router';
import{Location}  from '@angular/common';
@Component({
  selector: 'app-teamsch',
  templateUrl: './teamsch.component.html',
  styleUrls: ['./teamsch.component.css']
})
export class TeamschComponent implements OnInit {
  football:{};
title:String;
Log:{};
id:String;
  route: any;

  constructor( private teamchservice:TeamschService) { }
 
  ngOnInit() {
    this.getFootballData();
    this.title = "Football";
    this.logData = LOG;
    this.initRouteParams();
  }

  getFootballData() {
    this.teamschService.getFootball().subscribe(football => this.football = football);
  }

  getTeamLogoUrl(teamId: string) {
    for (let team of LOG) {
      if (team.id === teamId) {
        return team.url;
      }
    }
  }

  initRouteParams() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.teamId = id;
    }
  }

  getTeamEqui(teamId: string) {
    for (let team of LOG) {
      if (team.id === teamId) {
        return team.equi;
      }
    }
  }
}
}
 