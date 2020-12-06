import { Component, OnInit } from '@angular/core';
import { Team } from './team.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  team$!: Team[];

  constructor(private dataService: DataService){}
  
  ngOnInit (){
    return this.dataService.getTeam()
    .subscribe(data => this.team$ = data);
  }
  //title = 'teamfrontend4';
}
