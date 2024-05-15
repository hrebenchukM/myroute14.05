import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';//


import { NavComponent } from './nav/nav.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RegistrationComponent } from './registration/registration.component';

import { AppleComponent } from './apple/apple.component';
import { AsusComponent } from './asus/asus.component';
import { HpComponent } from './hp/hp.component';
import { AcerComponent } from './acer/acer.component';
import { LenovoComponent } from './lenovo/lenovo.component';
import { SamsungComponent } from './samsung/samsung.component';
import { DellComponent } from './dell/dell.component';
import { CanonComponent } from './canon/canon.component';
import { TplinkComponent } from './tplink/tplink.component';
import { LogitechComponent } from './logitech/logitech.component';
import { MainComponent } from './main/main.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,ContactsComponent,RegistrationComponent,
  AppleComponent,AsusComponent,HpComponent,AcerComponent,LenovoComponent,SamsungComponent,DellComponent,CanonComponent,TplinkComponent,LogitechComponent,
MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myroute';
}
