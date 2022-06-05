import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { ClientAdjustmentComponent } from './client-adjustment/client-adjustment.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { ClientsInvoicesComponent } from './clients-invoices/clients-invoices.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component:RegisterComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'utenti',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clienti',
    component: ClientsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'fatture',
    component: InvoicesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dettagliCliente',
    component: ClientDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dettagliFattura/:id',
    component: InvoiceDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'fattureCliente/:id',
    component: ClientsInvoicesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'newFattura/:id',
    component: NewInvoiceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'modificaCliente/:id',
    component: ClientAdjustmentComponent,
    canActivate: [AuthGuard],
  },

];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
