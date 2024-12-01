import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UserComponent } from './components/user/user.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

{path:'login', component:LoginComponent},
{path:'products', component:ProductComponent, canActivate:[authGuard]},
{path:'navbar', component:NavbarComponent},
{path:'add-product', component:AddProductComponent, canActivate:[authGuard]},
{path:'user', component:UserComponent , canActivate:[authGuard]},
{path: '**', redirectTo:'/login'}

];
