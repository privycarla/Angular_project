import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import { SignupComponent } from './signup/signup.component';



const routeConfig: Routes = [
    {
      path: 'home',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: 'login',
      component: LoginComponent,
      title: 'Login page',
    },
    {
      path: 'signup',
      component: SignupComponent,
      title: 'Signup page',
    }

  
  ];
  export default routeConfig;