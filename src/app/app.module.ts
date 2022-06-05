import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ClientsInvoicesComponent } from './clients-invoices/clients-invoices.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ClientAdjustmentComponent } from './client-adjustment/client-adjustment.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorInterceptor } from './interceptor/interceptor.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientsComponent,
    ClientDetailsComponent,
    InvoiceDetailsComponent,
    InvoicesComponent,
    ClientsInvoicesComponent,
    HomeComponent,
    LoginComponent,
    ClientAdjustmentComponent,
    NewInvoiceComponent,
    RegisterComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass : InterceptorInterceptor,
    multi : true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
