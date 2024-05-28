import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home';
// import { LoginComponent, RegisterComponent } from './account';
import { AppComponent } from './app.component';
// import { HomeComponent } from './components/home/home.component';
// import { NavComponent } from './components/nav/nav.component';
import { TabsComponent } from './components/tabs/tabs.component';
// import { TableComponent } from './components/table/table.component';
import { UserComponent } from './components/user/user.component';
import { RolesComponent } from './components/roles/roles.component';
// import { TestingComponent } from './components/testing/testing.component';
const routes: Routes = [
    // { path: '', component: AppComponent },
    // { path:'home',component:HomeComponent},
    // { path: 'account/login', component: LoginComponent },
    // { path: 'account/register', component: RegisterComponent },
    // { path:'table',component:TableComponent},
    // { path:'nav',component:NavComponent},
    // { path: 'test', component: TestingComponent },
    // otherwise redirect to home
    {path: 'roles',component:RolesComponent},
    {path:'users', component:UserComponent},
    // {path:'tabs',component:TabsComponent},
    { path: '**', redirectTo: 'app' },
    // { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }