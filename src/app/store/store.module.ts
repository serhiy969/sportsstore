import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CarouselComponent } from './carousel/carousel.component';
import { CounterDirective } from './counter.directive';


@NgModule({

	imports: [ModelModule, BrowserModule, FormsModule, MDBBootstrapModule.forRoot()],
	declarations: [StoreComponent, CounterDirective, CarouselComponent ],
	exports: [StoreComponent]
})

export class StoreModule { }
