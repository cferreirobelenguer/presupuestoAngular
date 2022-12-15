import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PresupuestoInicialComponent } from './presupuesto-inicial.component';
import { ListaGastosComponent } from '../lista-gastos/lista-gastos.component';


//Módule contenedor de los componentes: presupuestoInicial, listaGastos , listado; y el servicio PresupuestoService
@NgModule({
    declarations: [
        PresupuestoInicialComponent,
        ListaGastosComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports:[
        PresupuestoInicialComponent,
        ListaGastosComponent
    ],
    providers: [],
})
export class PresupuestoModule { }