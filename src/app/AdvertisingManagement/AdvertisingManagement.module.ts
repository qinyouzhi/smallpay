import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdvertisingManagementComponent } from './AdvertisingManagement.component'
import { RouterModule } from '@angular/router'


@NgModule({
  imports: [
    RouterModule.forChild([{path: '', component: AdvertisingManagementComponent}]),
    CommonModule
  ],
  declarations: [ AdvertisingManagementComponent ]
})
export class AdvertisingManagementModule { }
