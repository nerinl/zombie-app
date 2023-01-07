import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string; 

  constructor(
    private http: HttpClient
    ) { 
      this.url = "http://localhost:5000/api/v1/";
    }

  login(login: Login): Observable<Persona>{
    return this.http.get<Persona>(this.url + `personas/Name/${login.nombre}/Password/${login.password}`);
  }
}

export interface Login{
  nombre: string,
  password: string
}

export interface Persona{
  nombre: string,
  admin: Boolean,
  id: string
}