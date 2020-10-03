import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'


import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items-list.component';
import { DashComponent } from './dashboard/dash/dash.component';
import { AddItemComponent } from './dashboard/add-item/add-item.component';
import { UpdateItemComponent } from './dashboard/update-item/update-item.component';
import { DeleteItemComponent } from './dashboard/delete-item/delete-item.component';
import { WithdrawItemComponent } from './dashboard/withdraw-item/withdraw-item.component';
import { DepositItemComponent } from './dashboard/deposit-item/deposit-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    DashComponent,
    AddItemComponent,
    UpdateItemComponent,
    DeleteItemComponent,
    WithdrawItemComponent,
    DepositItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
