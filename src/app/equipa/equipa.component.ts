import { Component, OnInit } from '@angular/core';
import { TeamService } from './equipa.service';
import { ActivatedRoute } from '@angular/router';
import { LOG } from './mocks';
import { FOTO } from './fotosjr';
import { BA } from './bandeiras';

@Component({
  selector: 'app-equipa',
  templateUrl: './equipa.component.html',
  styleUrls: ['./equipa.component.css']
})
export class TeamComponent implements OnInit {
  football: any;
  id: string;
  log: any;
  foto: any;
  flagStatus: string;
  nationality: string;
  birthDate: any;
  color: any;
  coreColor: string;

  constructor(
    private equipaService: TeamService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getFootball();
    this.coreColor = this.getColor(core);
  }

  getFootball(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.equipaService.getFootball(id).subscribe(football => this.football = football);
    this.log = LOG;
    this.foto = FOTO;
  }

  calculateAge(birthDate: Date): number {
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return ageDate.getUTCFullYear() - 1970;
  }

  getLogUrl(id: string): string {
    for (let team of LOG) {
      if (team.id === id) {
        return team.url;
      }
    }
    return '';
  }

  getImageUrl(id: string): string {
    this.flagStatus = '1';
    for (let team of FOTO) {
      if (team.id === id) {
        this.flagStatus = '2';
        return team.url;
      }
    }

    if (this.flagStatus === '1') {
      return 'assets/images/uni.jpg';
    }
    return '';
  }

  getFlagUrl(id: string): string {
    this.nationality = id;
    for (let team of BA) {
      if (team.id === this.nationality) {
        return team.url;
      }
    }
    return '';
  }

  getAgeFromDate(date: string): number {
    const ageDifMs = Date.now();
    const ageDate = new Date(ageDifMs);
    this.birthDate = date.split("-");
    return ageDate.getUTCFullYear() - parseInt(this.birthDate[0], 10);
  }

  getColor(color: string): string {
    this.color = color.split("/");
    this.color[0] = this.color[0].toLocaleLowerCase();
    this.coreColor = this.color[0];
    return this.coreColor;
  }
}
