import { NgModule } from '@angular/core';

import { GeoinfraSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [GeoinfraSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [GeoinfraSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GeoinfraSharedCommonModule {}
