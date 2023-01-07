import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona, PersonasService } from 'src/app/services/personas.service';
import { IntercambiosService, Intercambio } from 'src/app/services/intercambios.service';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@Component({
  selector: 'app-survivors',
  templateUrl: './survivors.component.html',
  styleUrls: ['./survivors.component.css']
})
export class SurvivorsComponent implements OnInit {

  user:any;
  persona:any;
  showResult: Boolean = false;
  showInbox: Boolean = false;
  intercambios: Array<Intercambio> = [];
  personas: Array<Persona> = [];
  idSolicitarUsuario : FormControl = new FormControl("", [Validators.required]);
  
constructor(  
  private personaService: PersonasService,
  private router:Router,
  private activatedRoute:ActivatedRoute,
  private intercambioService: IntercambiosService,
){}
  ngOnInit(): void {
    this.getUser();
    this.populateSelect();
  }

  editForm = new FormGroup({
    latitud: new FormControl(''),
    longitud: new FormControl('')
  });
  

  updateUbication(persona: any){
    persona._id = this.user.id;
    this.personaService.postUpdatePersona(persona).subscribe(resp =>{
      console.log(resp);
    })
    console.log(persona);
  }
  
  getUser(){
    this.user = JSON.parse(localStorage.getItem('user') !);
    console.log('user: '+this.user.id);    
    this.getPersona(this.user.id);
  }

  getPersona(id: string){
    this.personaService.getPersona(id).subscribe(resp =>{
      console.log(resp);
      this.showResult = true;
      this.persona = resp;
    })
  }
  populateSelect(){
    this.personaService.getPersonas().subscribe(resp =>{
      this.personas = resp;
      console.log(this.personas);
    })
  }
}
