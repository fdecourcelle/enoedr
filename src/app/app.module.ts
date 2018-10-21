import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { baseURL } from "../shared/baseurl";
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
//import { AboutPage } from "../pages/about/about";
//import { MenuPage } from "../pages/menu/menu";
//import { ContactPage } from "../pages/contact/contact";
//import { DishdetailPage } from "../pages/dishdetail/dishdetail";
//import { FavoritesPage } from "../pages/favorites/favorites";
//import { ReservationPage } from "../pages/reservation/reservation";
//import { CommentPage } from "../pages/comment/comment";
//import { LoginPage } from "../pages/login/login";
//import { PatientdetailsPage } from "../pages/patientdetails/patientdetails";
//import { TimelinePage } from "../pages/timeline/timeline";
import { PdfViewerModule } from "ng2-pdf-viewer";
//import { RegisterPage } from "../pages/register/register";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { EmailComposer } from "@ionic-native/email-composer";
import { SocialSharing } from "@ionic-native/social-sharing";
import { Camera } from "@ionic-native/camera";

import { DishProvider } from "../providers/dish/dish";
import { LeaderProvider } from "../providers/leader/leader";
import { PromotionProvider } from "../providers/promotion/promotion";
import { ProcessHttpmsgProvider } from "../providers/process-httpmsg/process-httpmsg";
import { FavoriteProvider } from "../providers/favorite/favorite";
import { IonicStorageModule } from "@ionic/storage";
import { PatientProvider } from "../providers/patient/patient";
import { AboutPageModule } from "../pages/about/about.module";
import { RegisterPageModule } from "../pages/register/register.module";
import { TimelinePageModule } from "../pages/timeline/timeline.module";
import { PatientdetailsPageModule } from "../pages/patientdetails/patientdetails.module";
import { LoginPageModule } from "../pages/login/login.module";
import { MenuPageModule } from "../pages/menu/menu.module";
import { CommentPageModule } from "../pages/comment/comment.module";
import { ReservationPageModule } from "../pages/reservation/reservation.module";
import { ContactPageModule } from "../pages/contact/contact.module";
import { DishdetailPageModule } from "../pages/dishdetail/dishdetail.module";
import { FavoritesPageModule } from "../pages/favorites/favorites.module";

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    PdfViewerModule,
    AboutPageModule,
    RegisterPageModule,
    TimelinePageModule,
    PatientdetailsPageModule,
    LoginPageModule,
    MenuPageModule,
    CommentPageModule,
    ReservationPageModule,
    ContactPageModule,
    DishdetailPageModule,
    FavoritesPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DishProvider,
    LeaderProvider,
    PromotionProvider,
    PatientProvider,
    ProcessHttpmsgProvider,
    { provide: "BaseURL", useValue: baseURL },
    FavoriteProvider,
    EmailComposer,
    SocialSharing,
    Camera
  ]
})
export class AppModule {}
