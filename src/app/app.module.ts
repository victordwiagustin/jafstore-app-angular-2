import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoryInputComponent } from './components/master/category-input/category-input.component';
import { routing } from './app.routing';
import { MasterService } from './services/master.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CategoryService } from './services/category.service';
import { CreatorInputComponent } from './components/master/creator-input/creator-input.component';
import { CreatorService } from './services/creator.service';
import { ListComponent } from './components/master/list/list.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './services/alert.service';
import { DataTablesModule } from 'angular-datatables';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemListComponent } from './components/master/item-list/item-list.component';
import { ItemInputComponent } from './components/master/item-input/item-input.component';
import { ItemService } from './services/item.service';
import { MemberListComponent } from './components/master/member-list/member-list.component';
import { MemberService } from './services/member.service';
import { MemberInputComponent } from './components/master/member-input/member-input.component';
import { ItemPagingComponent } from './components/master/item-paging/item-paging.component';
import { PagerService } from './services/pager.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ItemNgxPaginationComponent } from './components/master/item-ngx-pagination/item-ngx-pagination.component'; 
import { OrderComponent } from './components/transaction/order/order.component';
import { OrderItemService } from './services/order-item.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoryInputComponent,
    CreatorInputComponent,
    ListComponent,
    AlertComponent,
    LoginComponent,
    HeaderComponent,
    ItemListComponent,
    ItemInputComponent,
    MemberListComponent,
    MemberInputComponent,
    ItemPagingComponent,
    ItemNgxPaginationComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
    DataTablesModule,
    NgxPaginationModule
  ],
  providers: [
    CategoryService
    , CreatorService
    , AlertService
    , ItemService
    , MemberService
    , PagerService
    , OrderItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
