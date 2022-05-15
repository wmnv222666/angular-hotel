import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './menu/home/home.component';
import { FoodComponent } from './food/food.component';
import { RestaurantComponent } from './food/restaurant/restaurant.component';
import { BarComponent } from './food/bar/bar.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { SpaComponent } from './lifestyle/spa/spa.component';
import { ActiveComponent } from './lifestyle/active/active.component';
import { ExperienceComponent } from './lifestyle/experience/experience.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { BeateaComponent } from './weddings/beatea/beatea.component';
import { GoodDayComponent } from './weddings/good-day/good-day.component';
import { CelebrationComponent } from './celebration/celebration.component';
import { OfficesComponent } from './offices/offices.component';
import { AuthComponent } from './auth/auth.component';
import { SinginComponent } from './auth/singin/singin.component';
import { SingupComponent } from './auth/singup/singup.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FoodComponent,
    RestaurantComponent,
    BarComponent,
    LifestyleComponent,
    SpaComponent,
    ActiveComponent,
    ExperienceComponent,
    WeddingsComponent,
    BeateaComponent,
    GoodDayComponent,
    CelebrationComponent,
    OfficesComponent,
    AuthComponent,
    SinginComponent,
    SingupComponent,
    MainComponent,
    HeaderComponent,
    SidenavComponent,
    NavtabsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
