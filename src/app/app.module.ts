import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
// Angular 8 problems
//import { NgxWebstorageModule } from 'ngx-webstorage';
import { NgJhipsterModule } from 'ng-jhipster';

import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';

import { GeoinfraCoreModule } from 'app/core';
import { GeoinfraSharedModule } from 'app/shared';
import { GeoinfraEntityModule } from './entities/entity.module';

import { AppComponent } from './app.component';

import * as moment from 'moment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgJhipsterModule.forRoot({
      // set below to true to make alerts look like toast
      alertAsToast: false,
      alertTimeout: 5000
    }),
    GeoinfraSharedModule.forRoot(),
    GeoinfraCoreModule,
    GeoinfraEntityModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private dpConfig: NgbDatepickerConfig) {
    this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
  }
}
