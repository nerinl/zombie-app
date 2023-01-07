import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona, PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-add-survivor',
  templateUrl: './add-survivor.component.html',
  styleUrls: ['./add-survivor.component.css']
})
export class AddSurvivorComponent implements OnInit {

  newForm = new FormGroup({
    nombre: new FormControl(''),
    edad: new FormControl(''),
    sexo: new FormControl(''),
    latitud: new FormControl(''),
    longitud: new FormControl(''),
    infectado: new FormControl(false),
    admin: new FormControl(false),
    agua: new FormControl(0, [ Validators.required,Validators.minLength(1)]),
    comida: new FormControl(0),
    medicamento: new FormControl(0),
    municion: new FormControl(0),
    password: new FormControl(''),
    username: new FormControl('')
  });

  constructor(    
    private personaService: PersonasService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ){}
  ngOnInit(): void {
  }

  addPerson(persona: any){
    this.personaService.postSetPersona(persona).subscribe(resp =>{
      this.salir();
    })
  }

  salir(){  
    this.router.navigate(["dashboard"]);
  }

}
