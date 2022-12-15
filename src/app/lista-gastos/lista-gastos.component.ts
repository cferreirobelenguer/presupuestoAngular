import { Component, OnInit, Input ,OnChanges, SimpleChanges} from '@angular/core';
import { presupuestoData } from '../interface/interfacePresupuesto';
import { listadoData } from '../interface/listado.interface';

@Component({
  selector: 'app-lista-gastos',
  templateUrl: './lista-gastos.component.html',
  styleUrls: ['./lista-gastos.component.css']
})
export class ListaGastosComponent implements OnInit, OnChanges{
  @Input() presup:presupuestoData={
    presu:0
  }
  public list:listadoData[]=[]
  public listadoDatos:listadoData
  public restante:number=0
  constructor(){
    this.listadoDatos={
      compra:"",
      gasto:0
    }
    //la variable restante se inicializa con el valor del presupuesto inicial
    
  }

  ngOnInit(): void {
    console.log("Al pasar al componente lista gastos: "+this.presup.presu)
    console.log(typeof(this.restante))
    console.log("Este es el restante: "+this.restante)
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Actualiza los cambios del Input presup.presu que heredamos del componente presupuesto
    console.log(changes)
    this.restante=this.presup.presu
    console.log("restante de onchanges"+this.restante)
  }
  dataSend(){
    /* método que se ejecuta cuando se pulsa agregar datos
    Se agregan los datos a un objeto listadoDatos, 
    se calcula la cantidad restante y se añade el objeto a un array llamado list */

    this.listadoDatos={
      compra:this.listadoDatos.compra,
      gasto:this.listadoDatos.gasto
    }
    /* Si el gasto es menor o igual que el presupuesto inicial 
    se añade el gasto a la lista de gastos que es la variable list */
    if(this.listadoDatos.gasto<=this.presup.presu){
      this.list.push(this.listadoDatos)
    }
    //Se calcula el restante siempre y cuando no se sobrepase el presupuesto inicial y no se calculen números negativos
    if(this.listadoDatos.gasto<=this.restante){
      if(this.restante!==0){
      this.restante-=this.listadoDatos.gasto
    }
    
    }
    
    console.log(this.list)

  }
}
