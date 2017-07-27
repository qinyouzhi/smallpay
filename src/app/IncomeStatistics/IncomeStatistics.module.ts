import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IncomeStatisticsComponent } from './IncomeStatistics.component'
import { RouterModule } from '@angular/router'
import { Ng2Echarts } from 'ng2-echarts';

@NgModule({
  imports: [
    RouterModule.forChild([{path: '', component: IncomeStatisticsComponent}]),
    CommonModule
  ],
  declarations: [ IncomeStatisticsComponent, Ng2Echarts ]
})
export class IncomeStatisticsModule { }
