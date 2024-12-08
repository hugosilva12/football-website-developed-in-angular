import { Component, OnInit } from '@angular/core';
import{EquipaService} from'./equipa.service';
import{ActivatedRoute} from '@angular/router';
import{Location}  from '@angular/common';
import{LOG} from './mocks';
import{FOTO} from'./fotosjr';
import{BA} from'./bandeiras';
import { core } from '@angular/compiler';

@Component({
  selector: 'app-equipa',
  templateUrl: './equipa.component.html',
  styleUrls: ['./equipa.component.css']
})
export class EquipaComponent implements OnInit {
  [x: string]: any;
 football:{};
 id:String;
 Log:{};
 Foto:{};
 ola:String;
 hello:String;
 date:{};
 cor:{};
 core:String;
  constructor(
    private equipa: EquipaService ,
    private route: ActivatedRoute
    
    ) { }

  ngOnInit() {
    this.football;
   
    this.getFootball();
    this.core= this.getcor(core);
 
  }
   
  getFootball(){
    const id = this.route.snapshot.paramMap.get('id');
    this.equipa.getFootball(id).subscribe(football => this.football=football);
    this.Log=LOG;
    this.Foto=FOTO;
  }

  

  getIdade(nascimento){
    var idadeDifMs = Date.now() - nascimento.getTime();
    var idadeData = new Date(idadeDifMs);
    var idade = idadeData.getUTCFullYear() - 1970;
    return idade;
  }

  getlog(id1){
    for(let team of LOG){
      if(team.id == id1){
      return team.url;
    }

    }
    
  }
  getimages(id1){
     this.ola = '1';
    for(let equipa of FOTO){
      if(equipa.id == id1){
      this.ola='2';
        return equipa.url;

    }

    }

    
    if(this.ola == '1'){
      
        return 'assets/images/uni.jpg';
   
    }

    
  }

  getbandeiras(id1){
    this.hello= id1;

   for(let equipa of BA){
     if(equipa.id == this.hello){
       return equipa.url;

   }

  }
 
}

getidade( date){
  var idadeDifMs = Date.now();
  var idadeData = new Date(idadeDifMs);
  var idade = idadeData.getUTCFullYear() - 1970;
this.date= date.split("-");
return  idadeData.getUTCFullYear()- this.date[0];



}
getcor( cor){
this.cor= cor.split("/")
this.cor[0]= this.cor[0].toLocaleLowerCase();
this.core= this.cor[0];
return this.core;



}

}
