import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/interfaces/client';
import { ClienteService } from '../services/cliente.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  constructor(private clientSrv: ClienteService, private router: Router) {}
  clienti!: any;
  numberPage: any;
  resp: any;
  idClient!: number;
  actualPAge: number = 0;

  ngOnInit(): void {
    this.clientSrv.getAll(0).subscribe((x) => {
      this.resp = x;
      this.clienti = this.resp.content;
      const numberPage = Array(this.resp.totalPages);
      this.numberPage = numberPage;
    });
  }
  changePage(page: number) {
    this.clientSrv.getAll(page).subscribe((x) => {
      this.resp = x;
      this.clienti = this.resp.content;
      this.actualPAge = page;
    });
  }
  async deleteClient(idClient: number, i: number) {
    this.idClient = idClient;
    let id = this.actualPAge * 20 + this.idClient;
    await this.clientSrv.deleteInvoice(idClient).toPromise();
    this.clientSrv.delete(idClient).subscribe((x) => {
      this.router.navigate(['/clienti']);
      this.clienti.splice(i, 1);
    });
  }

  cancellaCliente(clienteID: number) {
    this.clientSrv.delete(clienteID).subscribe();
    this.clientSrv.deleteallinvoicebyId(clienteID).subscribe();
    location.reload();
  }
}
