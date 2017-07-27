import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ParkingsManagementComponent } from './ParkingsManagement.component'
import { RouterModule } from '@angular/router'


@NgModule({
  imports: [
    RouterModule.forChild([{path: '', component: ParkingsManagementComponent}]),
    CommonModule
  ],
  declarations: [ ParkingsManagementComponent ]
})
export class ParkingsManagementModule { }
