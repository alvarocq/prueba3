import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }  from '@angular/http';
import { FormsModule }  from '@angular/forms';
import { routing, appRoutingProviders }  from './app.routing';

import { AppComponent }  from './app.component';
import { FrutaComponent }  from './fruta/fruta.component';
import { Empleados }  from './empleados/empleados.component';

import { HomeComponent }  from './home/home.component';
import { ContactoComponent }  from './contacto/contacto.component';
import { CochesComponent }  from './coches/coches.component';

import { ConversorPipe } from './pipes/conversor.pipe';



@NgModule({
  imports:      [ BrowserModule,
  					FormsModule,
  					HttpModule,
  					routing
  				],
  declarations: [ AppComponent, 
  				FrutaComponent, 
  				Empleados, 
  				HomeComponent, 
  				ContactoComponent,
          ConversorPipe,
          CochesComponent
          ],

  providers: [appRoutingProviders],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
