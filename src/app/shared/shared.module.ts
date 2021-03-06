import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { CardsComponent } from './components/cards/cards.component';
import { DashHeaderComponent } from './components/dash-header/dash-header.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SelectOptionsComponent } from './components/select-options/select-options.component';

@NgModule({
  declarations: [
    CardsComponent,
    DashHeaderComponent,
    ModalComponent,
    LoaderComponent,
    SelectOptionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [
    ModalComponent
  ],
  exports: [
    CommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardsComponent,
    DashHeaderComponent,
    ModalComponent,
    SelectOptionsComponent
  ]
})
export class SharedModule { }
