import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ParkingManagementComponent } from './ParkingManagement.component'
import { RouterModule } from '@angular/router'


@NgModule({
  imports: [
    RouterModule.forChild([{path: '', component: ParkingManagementComponent}]),
    CommonModule
  ],
  declarations: [ ParkingManagementComponent ]
})
export class ParkingManagementModule { }
