import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PacketsComponent } from './packets/packets.component';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { MenuComponent } from './menu/menu.component';
import { ServicesComponent } from './services/services.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [MainComponent, HomeComponent, GalleryComponent, PacketsComponent, AboutComponent, ChatComponent, MenuComponent, ServicesComponent, NotfoundComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
