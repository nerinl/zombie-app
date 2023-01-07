import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private url: string; 

  constructor(
    private http: HttpClient
    ) { 
      this.url = "http://localhost:5000/api/v1/";
    }

  getPersona(id: string): Observable<Persona>{
    return this.http.get<Persona>(this.url + `personas/${id}`);
  }
  getPersonas(): Observable<Array<Persona>>{
    return this.http.get<Array<Persona>>(this.url + `personas/`);
  }
  postUpdatePersona(persona: any){
    return this.http.patch(this.url + `personas/updatePersona/`+persona._id, persona);
}
  postEliminarPersona(id: String){
    return this.http.post(this.url + `personas/removePersona/`+id, {});
}

postSetPersona(persona: any){
  return this.http.post(this.url + `personas/setPersona/`, persona);
}
getInforme(): Observable<Informe>{
  return this.http.get<Informe>(this.url + `informes/getPorcentajes/`);
}
postSetInfectado(id: any){
  return this.http.patch(this.url + `personas/setInfectado/`+id, {});
}
}

export interface Persona{
  nombre: string,
  edad: Number,
  sexo: string,
  latitud: Number,
  longitud: Number,
  infectado: Boolean,
  password: string,
  _id: String,
  admin: Boolean,
  agua: Number,
  comida: Number
  medicamento: Number,
  municion: Number,
  username: String
}

export interface Informe{
    infectados: Number,
    noInfectados: Number,
    totalPersonas: Number,
    promedioInfectados: Number,
    promedioNoInfectados: Number
}