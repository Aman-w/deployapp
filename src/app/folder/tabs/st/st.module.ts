import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StPageRoutingModule } from './st-routing.module';

import { StPage } from './st.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StPageRoutingModule
  ],
  declarations: [StPage]
})
export class StPageModule {}
