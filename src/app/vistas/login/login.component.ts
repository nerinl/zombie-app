import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login, Persona, LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    nombre : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

errorStatus: boolean = false;
errorMsj: string = "";
usuario: any;

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  ngOnInit(): void{
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(localStorage.getItem("user"))
      this.router.navigate(["dashboard"]);
  }

  onLogin(form: any){
    this.loginService.login(form).subscribe((resp) =>{
      console.log(resp);
      this.usuario = resp;
      localStorage.setItem("user", JSON.stringify(resp))
      if(this.usuario.admin)
        this.router.navigate(["dashboard"]);
      else
        this.router.navigate(["survivors"]);
    },
    (error)=>{      
      this.errorMsj = error.error.error;
      this.errorStatus= true;
    }
    )
  }

}
