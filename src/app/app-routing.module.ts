import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FoodComponent } from './food/food.component';
import { CelebrationComponent } from './celebration/celebration.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { OfficesComponent } from './offices/offices.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { SinginComponent } from './auth/singin/singin.component';
import { SingupComponent } from './auth/singup/singup.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path: '', component: MainComponent},
{path: 'menu', component: MenuComponent},
{path: 'food', component: FoodComponent},
{path: 'food' ,
 redirectTo: 'food',
pathMatch: 'full'},
{path: 'footer', component: FooterComponent},

{path: 'celebration', component: CelebrationComponent},
{path: 'lifestyle', component: LifestyleComponent},
{path: 'offices', component: OfficesComponent},
{path: 'weddings', component: WeddingsComponent},
{path: 'singin', component: SinginComponent},
{path: 'singup', component: SingupComponent},
{path: 'main', component: MainComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
