import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GeoinfraSharedModule } from 'app/shared';
import {
  CountryComponent,
  CountryDetailComponent,
  CountryUpdateComponent,
  CountryDeletePopupComponent,
  CountryDeleteDialogComponent,
  countryRoute,
  countryPopupRoute
} from './';

const ENTITY_STATES = [...countryRoute, ...countryPopupRoute];

@NgModule({
  imports: [GeoinfraSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    CountryComponent,
    CountryDetailComponent,
    CountryUpdateComponent,
    CountryDeleteDialogComponent,
    CountryDeletePopupComponent
  ],
  entryComponents: [CountryComponent, CountryUpdateComponent, CountryDeleteDialogComponent, CountryDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GeoinfraCountryModule {}
