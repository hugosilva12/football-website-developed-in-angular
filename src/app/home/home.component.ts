import { Component, OnInit } from '@angular/core';
import{HomeService} from './home.service';
import{HOME} from './mocks';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  inicial:String;
  title:String;
  nos:{};
  Home:{};
  football:{};
  football2:{};
  
  constructor( private homeservice:HomeService ) { 
    
  }

  ngOnInit() {
       this.inicial="assets/images/champ2.jpg";
       this.title="FutChamp";
       this.Home=HOME;
       this.getFootball();
       this.getFootball2();
  }
  getFootball(){
    this.homeservice.getFootball().subscribe(football => this.football=football);
  }
  getFootball2(){
    this.homeservice.getFootball2().subscribe(football => this.football2=football);
  }
  


}
