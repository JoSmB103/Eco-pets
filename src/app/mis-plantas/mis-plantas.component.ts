import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from './../cargar-scripts.service';

@Component({
  selector: 'app-mis-plantas',
  templateUrl: './mis-plantas.component.html',
  styleUrls: ['./mis-plantas.component.css']
})
export class MisPlantasComponent implements OnInit {

  constructor(private _CargaScripts:CargarScriptsService) { 
    _CargaScripts.Carga(["añadir"])
  }

  ngOnInit(): void {
  }

}
