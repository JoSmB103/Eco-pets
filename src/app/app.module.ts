import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CargarScriptsService } from './cargar-scripts.service';

import { AppComponent } from './app.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { CuidadosComponent } from './cuidados/cuidados.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { LoguinComponent } from './loguin/loguin.component';
import { MisPlantasComponent } from './mis-plantas/mis-plantas.component';




@NgModule({
  declarations: [
    AppComponent,
    RecomendacionesComponent,
    CuidadosComponent,
    NotificacionesComponent,
    LoguinComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [ CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
