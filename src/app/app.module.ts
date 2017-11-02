import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { ContentComponent } from './content/content.component';
import { ContentHdComponent } from './content/content-hd/content-hd.component';
import { FooterComponent } from './footer/footer.component';
import { SideInfoComponent } from './side-info/side-info.component';
import { StockManageComponent } from './stock/stock-manage/stock-manage.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    ContentComponent,
    ContentHdComponent,
    FooterComponent,
    SideInfoComponent,
    StockManageComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
