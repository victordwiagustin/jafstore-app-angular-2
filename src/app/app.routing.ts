import { Routes, RouterModule } from '@angular/router';
import { CategoryInputComponent } from './components/master/category-input/category-input.component';
import { CreatorInputComponent } from './components/master/creator-input/creator-input.component';
import { ListComponent } from './components/master/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { ItemListComponent, itemListPath } from './components/master/item-list/item-list.component';
import { ItemInputComponent } from './components/master/item-input/item-input.component';
import { MemberInputComponent } from './components/master/member-input/member-input.component';
import { MemberListComponent } from './components/master/member-list/member-list.component';
import { ItemPagingComponent } from './components/master/item-paging/item-paging.component';
import { ItemNgxPaginationComponent } from './components/master/item-ngx-pagination/item-ngx-pagination.component';
import { OrderComponent } from './components/transaction/order/order.component';

export const appRoutes: Routes = [
  { path: "master/category", component: CategoryInputComponent }
  , { path: "master/creator", component: CreatorInputComponent }
  , { path: "list", component: ListComponent }
  , { path: "login", component: LoginComponent }
  , { path: itemListPath, component: ItemListComponent }
  , { path: "master/item", component: ItemInputComponent }
  , { path: "master/member", component: MemberInputComponent }
  , { path: "member-list", component: MemberListComponent }
  , { path: "item-paging", component: ItemPagingComponent }
  , { path: "item-ngx-paging", component: ItemNgxPaginationComponent }
  , { path: "order", component: OrderComponent }
];

export const routing = RouterModule.forRoot(appRoutes);