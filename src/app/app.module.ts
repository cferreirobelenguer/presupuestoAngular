import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PresupuestoModule } from './presupuesto-inicial/presupuesto.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PresupuestoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
