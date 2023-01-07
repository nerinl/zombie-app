import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona, PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-update-survivor',
  templateUrl: './update-survivor.component.html',
  styleUrls: ['./update-survivor.component.css']
})
export class UpdateSurvivorComponent implements OnInit {

  constructor(
    private personaService: PersonasService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ){}

  user: any;
  personaid: string = "";
  persona: any;
  editForm = new FormGroup({
    nombre: new FormControl(''),
    edad: new FormControl(''),
    sexo: new FormControl(''),
    latitud: new FormControl(''),
    longitud: new FormControl(''),
    infectado: new FormControl(''),
    admin: new FormControl('')
  });

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.user = JSON.parse(localStorage.getItem('user') !);
    console.log('user: '+this.user.nombre);
    if(this.user.admin){
      this.personaid = this.activatedRoute.snapshot.paramMap.get('id') || '';
      this.getPersona(this.personaid);
    }
    else
    this.router.navigate(['login']);
  }

  getPersona(id: string){    
    this.personaService.getPersona(id).subscribe(resp =>{
      console.log(resp);
      this.persona = resp;
      this.editForm.setValue({
        nombre: this.persona.nombre,
        edad: this.persona.edad,
        sexo: this.persona.sexo,
        latitud: this.persona.latitud,
        longitud: this.persona.longitud,
        infectado: this.persona.infectado,
        admin: this.persona.admin
      });
      console.log(this.editForm.value);
  })
}


updatePerson(persona: any){
  persona._id = this.personaid;
  this.personaService.postUpdatePersona(persona).subscribe(resp =>{
  })
}
deletePerson(){
  this.personaService.postEliminarPersona(this.personaid).subscribe(resp =>{
    this.router.navigate(["dashboard"]);
  })
}

salir(){  
  this.router.navigate(["dashboard"]);
}

}
