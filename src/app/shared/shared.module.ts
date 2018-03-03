import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
     declarations: [],
     imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule
     ],
     exports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule
     ]
})
export class SharedModule {}