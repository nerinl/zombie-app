import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IntercambiosService } from 'src/app/services/intercambios.service';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {
  user: any;
  personaid: string = "";
  persona: any;
  usuarioSolicita:any;
  usuarioSolicitado:any;
  usu1: Boolean = false;
  usu2: Boolean = false;
  newTrade = new FormGroup({
    idSolicita: new FormControl(''),
    usernameSolicita: new FormControl(''),
    idSolicitado: new FormControl(''),
    usernameSolicitado: new FormControl(''),
    aguaSolicita: new FormControl(0),
    comidaSolicita: new FormControl(0),
    medicamentoSolicita: new FormControl(0),
    municionSolicita: new FormControl(0),
    aguaSolicitado: new FormControl(0),
    comidaSolicitado: new FormControl(0),
    medicamentoSolicitado: new FormControl(0),
    municionSolicitado: new FormControl(0),
    nombreSolicita: new FormControl(''),
    nombreSolicitado: new FormControl(''),
    aprobado: new FormControl(false)
  });
  constructor(
    private personaService: PersonasService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private intercambiosService: IntercambiosService
  ){}
  ngOnInit(): void {
    this.getUsuarios();
  }
  getUsuarios(){
    this.getUser();
    this.getUser2();
  }
  getUser(){
    this.user = JSON.parse(localStorage.getItem('user') !);
      this.getPersona(this.user.id);
  }
  getUser2(){
      this.personaid = this.activatedRoute.snapshot.paramMap.get('id') || '';
      this.getPersona2(this.personaid);
  }
  getPersona(id: string){    
    this.personaService.getPersona(id).subscribe(resp =>{
      console.log(resp);
      this.usu1= true;
      this.usuarioSolicita = resp;
      this.setFormValues();
      return resp;      
  })
}
 getPersona2(id: string){
  console.log("iniciando persona 2, id: "+ id);
  this.personaService.getPersona(id).subscribe(resp =>{
    console.log("getpersona2"+resp.username);    
    this.usu2= true;
    this.usuarioSolicitado = resp;
    this.setFormValues();
    return resp;    
  })
}
updatePerson(persona: any){
  persona._id = this.personaid;
  this.personaService.postUpdatePersona(persona).subscribe(resp =>{
    console.log(resp);
  })
  console.log(persona);
}
  
salir(){  
  this.router.navigate(["dashboard"]);
}

setFormValues(){
  if(this.usu1 && this.usu2){
    console.log(this.usuarioSolicita);
    console.log(this.usuarioSolicitado);
    this.newTrade.setValue({        
      idSolicita: this.usuarioSolicita._id,
      usernameSolicita: this.usuarioSolicita.username,
      idSolicitado: this.usuarioSolicitado._id,
      usernameSolicitado: this.usuarioSolicitado.username,
      aguaSolicita: 0,
      comidaSolicita: 0,
      medicamentoSolicita: 0,
      municionSolicita: 0,
      aguaSolicitado: 0,
      comidaSolicitado: 0,
      medicamentoSolicitado: 0,
      municionSolicitado: 0,
      nombreSolicita: this.usuarioSolicita.nombre,
      nombreSolicitado: this.usuarioSolicitado.nombre,
      aprobado: false
    });
  }
}
sendTrade(trade:any){
  this.intercambiosService.postSetTrade(trade).subscribe(resp =>{
    console.log(resp);
  })
}
}
