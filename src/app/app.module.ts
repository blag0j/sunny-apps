import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Search } from '../pages/search/search';
import { Recommend } from '../pages/recommend/recommend';
import { ListPage } from '../pages/list/list';
import { Beaches } from '../pages/beaches/beaches';
import { Profile } from '../pages/profile/profile';
import { NativeScriptHttpModule } from "nativescript-angular/http"
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChartModule } from 'angular2-highcharts';

declare var require: any;
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Search,
    Recommend,
    Beaches,
    Profile
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp, {passThruUnknownUrl: true}),
    ChartModule.forRoot(require('highcharts'))

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Search,
    Recommend,
    Beaches,
    Profile
  ],
  providers: [
    StatusBar,
    SplashScreen,
      HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
