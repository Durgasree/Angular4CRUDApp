import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateEditComponent } from './user-create-edit/user-create-edit.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


const appRoutes: Routes = [
  {path: 'user/:user_id',component: UserDetailComponent},
  {path: 'users',component: UserListComponent},
  {path: 'editUser/:user_id',component: UserCreateEditComponent},
  {path: '**',component: UserListComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UserListComponent,
    UserCreateEditComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
     ModalModule.forRoot(),
     BootstrapModalModule,
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);
