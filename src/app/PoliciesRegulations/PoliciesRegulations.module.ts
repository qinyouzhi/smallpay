import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PoliciesRegulationsComponent } from './PoliciesRegulations.component'
import { RouterModule } from '@angular/router'


@NgModule({
  imports: [
    RouterModule.forChild([{path: '', component: PoliciesRegulationsComponent}]),
    CommonModule
  ],
  declarations: [ PoliciesRegulationsComponent ]
})
export class PoliciesRegulationsModule { }
