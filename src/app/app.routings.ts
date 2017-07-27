import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',redirectTo: '/map',pathMatch: 'full' },
  { path: 'map', loadChildren: './map/map.module#MapModule' },
  { path: 'ParkingsManagement', loadChildren: './ParkingsManagement/ParkingsManagement.module#ParkingsManagementModule' },
  { path: 'PoliciesRegulations', loadChildren: './PoliciesRegulations/PoliciesRegulations.module#PoliciesRegulationsModule' },
  { path: 'ParkingManagement', loadChildren: './ParkingManagement/ParkingManagement.module#ParkingManagementModule' },
  { path: 'AdvertisingManagement', loadChildren: './AdvertisingManagement/AdvertisingManagement.module#AdvertisingManagementModule' },
  { path: 'PersonnelManagement', loadChildren: './PersonnelManagement/PersonnelManagement.module#PersonnelManagementModule' },
  { path: 'IncomeStatistics', loadChildren: './IncomeStatistics/IncomeStatistics.module#IncomeStatisticsModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash:true})
  ],
  exports: [RouterModule],
  providers: []
})

export class routing { }
