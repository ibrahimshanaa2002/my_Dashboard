import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgChartsModule} from "ng2-charts";
import { LayoutModule } from '@angular/cdk/layout';
import { BgCardComponent } from './bg-card/bg-card.component';
import { SmCardComponent } from './sm-card/sm-card.component';
import { SmallBarComponent } from './smallBar/smallBar.component';
import { LineComponent } from './line/line.component';
import { DoughComponent } from './dough/dough.component';
import { MdCardComponent } from './md-card/md-card.component';
import {BarComponent} from "./bar/bar.component";
import {BarLineChartComponent} from "./barLineChart/barLineChart.component";
import { CardsContainerComponent } from './cards-container/cards-container.component';
import {KPISComponent} from "./kpis/kpis.component";
import {TableComponent} from "./table/table.component";
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    BgCardComponent,
    LineComponent,
    SmCardComponent,
    SmallBarComponent,
    LineComponent,
    DoughComponent,
    MdCardComponent,
    BarLineChartComponent,
    CardsContainerComponent,
    KPISComponent,
    TableComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule,
    LayoutModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
