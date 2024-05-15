import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    // {path:"", component:AppComponent},
    {path:"contacts", component:ContactsComponent},
    {path:"registration", component:RegistrationComponent}


];//определение массивов маршрутов из компонентов
