import { RouterModule , Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './form/register/register.component';
import { LoginComponent } from './form/login/login.component';
import { AuthGuard } from './form/auth-guard.service';
import { AuthService } from './form/auth.service';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { AdminComponent } from './admin/admin.component';
import { AdminAboutComponent } from './admin/admin-about/admin-about.component';

const APP_ROUTES:Routes=[

{ path:'' , component: HomeComponent } ,
{ path:'admin' ,  canActivate:[AuthGuard]  ,


children:
[

{
path:'',
component:AdminComponent,
},

{
path:'about',
component:AdminAboutComponent,
},



]

 },
 

 

//{ path:'admin/about' , component: AdminAboutComponent } ,
{ path:'contact-us' , component: ContactUsComponent } ,
{ path:'faq' , component: FaqComponent } ,
{ path:'register' , component: RegisterComponent } ,
{ path:'login' , component: LoginComponent } ,
//{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] } ,
{ path:'**' , redirectTo:'' , pathMatch:'full' }

]

export const routing = RouterModule.forRoot(APP_ROUTES);