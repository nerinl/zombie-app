import { Component } from '@angular/core';
import { Persona, PersonasService } from './services/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zombie-app';

  constructor(
    private personaService:PersonasService
  )
  {
    
  }
}
