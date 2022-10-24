import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { CuidadosComponent } from './cuidados/cuidados.component';
import { MisPlantasComponent } from './mis-plantas/mis-plantas.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { LoguinComponent } from './loguin/loguin.component';



const routes: Routes =[
  {path:'',component:MisPlantasComponent},
  {path:'cuidados',component:CuidadosComponent},
  {path:'recomendaciones',component:RecomendacionesComponent},
  {path:'notificaciones',component:NotificacionesComponent},
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
