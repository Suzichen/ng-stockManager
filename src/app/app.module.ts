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
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import { StockService } from './stock/stock.service';

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
    StarsComponent,
    DashboardComponent,
    StockFormComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
