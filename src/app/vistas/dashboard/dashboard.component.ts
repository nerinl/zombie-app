import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona, PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  personas:Array<Persona> = [];
  showResult: Boolean = false;
  showReport: Boolean = false;
  admin: Boolean = false;
  user: any;
  informe:any;

  constructor(
    private personaService: PersonasService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.getUser();
    this.personaService.getPersonas().subscribe(resp =>{
      console.log(resp);
      this.showResult = true;
      this.personas = resp;

    })
    this.getInforme();
  }
  updatePerson(id: any){
    this.router.navigate(["updatePerson", id]);
  }
  newPerson(){
    this.router.navigate(["addSurvivor"]);
  }  
  getUser(){
    this.user = JSON.parse(localStorage.getItem('user') !);
    console.log('user: '+this.user.id);    
    this.admin = this.user.admin;
  }
  newTrade(id:any){
    console.log('trade: '+ id); 
    this.router.navigate(["trade", id]);
  }
  getInforme(){
    this.personaService.getInforme().subscribe(resp =>{
      console.log(resp);
      this.showReport = true;
      this.informe = resp;

    })
  }
  markInfected(id:any){console.log('infected'+id);
    this.personaService.postSetInfectado(id).subscribe(resp =>{
    })
    window.location.reload();
  }
}
