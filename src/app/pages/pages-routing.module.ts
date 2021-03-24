import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PacketsComponent } from './packets/packets.component';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { MenuComponent } from './menu/menu.component';
import { ServicesComponent } from './services/services.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path:"",
    component:MainComponent,
    children:[
      {
        path:"home",
        component:HomeComponent,
      },
      {
        path:"gallery",
        component:GalleryComponent,
      },
      {
        path:"packets",
        component:PacketsComponent,
        children:[
          {
            path:"menu",
            component:MenuComponent,
          },
          {
            path:"services",
            component:ServicesComponent,
          },
        ]
      },
      {
        path:"about",
        component:AboutComponent,
      },
      {
        path:"chat",
        component:ChatComponent,
      },
      {
        path:"",
        redirectTo:"home",
        pathMatch:"full",
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
