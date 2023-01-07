import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSurvivorComponent } from './vistas/add-survivor/add-survivor.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { LoginComponent } from './vistas/login/login.component';
import { SurvivorsComponent } from './vistas/survivors/survivors.component';
import { TradeComponent } from './vistas/trade/trade.component';
import { UpdateSurvivorComponent } from './vistas/update-survivor/update-survivor.component';

const routes: Routes = [
  {
    path: "", redirectTo:'login', pathMatch:'full'
  },
  { 
    path: 'login', 
    component: LoginComponent,
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
  },
  { 
    path: 'addSurvivor', 
    component: AddSurvivorComponent,
  },
  { 
    path: 'updatePerson/:id', 
    component: UpdateSurvivorComponent,
  },
  { 
    path: 'survivors',
    component: SurvivorsComponent,
  },
  { 
    path: 'trade/:id', 
    component: TradeComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, AddSurvivorComponent, UpdateSurvivorComponent];