import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { SurvivorsComponent } from './vistas/survivors/survivors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TradeComponent } from './vistas/trade/trade.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SurvivorsComponent,
    TradeComponent
    //DashboardComponent,
    //LoginComponent,
    //AddSurvivorComponent,
    //UpdateSurvivorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
