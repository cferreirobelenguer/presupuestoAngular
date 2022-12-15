import { Component } from '@angular/core';
import { presupuestoData } from '../interface/interfacePresupuesto';
import { listadoData } from '../interface/listado.interface';

@Component({
  selector: 'app-presupuesto-inicial',
  templateUrl: './presupuesto-inicial.component.html',
  styleUrls: ['./presupuesto-inicial.component.css']
})
export class PresupuestoInicialComponent {
  public show:boolean
  public botonActivado:boolean
  public presup:presupuestoData
  public list:listadoData[]=[]
  constructor(){

    this.show=false
    this.botonActivado=false
    this.presup={
      presu:0
    }
  }
  
  enviarDatos(){

      this.presup={
        presu:this.presup.presu
      }
      if(this.presup.presu>0){
        //Si se presiona el botón Enviar presupuesto se pone a true botonActivado y show
        //y se muestra el componente lista-gastos
        this.botonActivado=true
        this.show=true
      }
  }
  volverInicio(){
    this.show=false
    this.botonActivado=false
  }
  
  
}
