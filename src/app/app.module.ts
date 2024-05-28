import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
// import { TestingComponent } from './components/testing/testing.component';
import { PaginatorModule } from 'primeng/paginator';
import { TableComponent } from './components/table/table.component';
// import { FilterpipePipe } from './filterpipe.pipe';
import { DropdownModule } from 'primeng/dropdown';
// import { IgxDropDownModule } from 'igniteui-angular';

// import { NavComponent } from './components/nav/nav.component';
// import { NavComponent } from './components/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CommonTableComponent } from './components/common-table/common-table.component';

import { RolesComponent } from './components/roles/roles.component';
// import { LoginComponent, RegisterComponent } from './account';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // NavComponent,
    // TestingComponent,
    TableComponent,
    UserComponent,
    TabsComponent,
    CommonTableComponent,
    RolesComponent

    // NavComponent,
    // LoginComponent,
    // RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    NgxPaginationModule,
    PaginatorModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
