import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { ErrorStateComponent } from './component/error-state/error-state.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    ErrorStateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    ErrorStateComponent
  ]
})
export class SharedModule { }
