import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
