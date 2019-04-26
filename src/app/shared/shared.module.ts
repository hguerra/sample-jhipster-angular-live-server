import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GeoinfraSharedLibsModule, GeoinfraSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [GeoinfraSharedLibsModule, GeoinfraSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [GeoinfraSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GeoinfraSharedModule {
  static forRoot() {
    return {
      ngModule: GeoinfraSharedModule
    };
  }
}
