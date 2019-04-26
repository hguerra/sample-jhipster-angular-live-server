import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#GeoinfraRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#GeoinfraCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#GeoinfraLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#GeoinfraDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#GeoinfraTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#GeoinfraEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#GeoinfraJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#GeoinfraJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GeoinfraEntityModule {}
