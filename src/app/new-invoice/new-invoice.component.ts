import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { InvoiceService } from '../services/invoice.service';
import { Client } from 'src/interfaces/client';
import { ClienteService } from '../services/cliente.service';
import { Invoice } from 'src/interfaces/invoice';


@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.scss'],
})
export class NewInvoiceComponent implements OnInit {
  constructor(
    private clientSrv: ClienteService,
    private route: ActivatedRoute,
    private invoiceSrv: InvoiceService,
    private router: Router,

  ) {}

  id!: number;
  resp: any;
  cliente!: any;
  newInvoice!: Invoice;


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.clientSrv.getById(this.id).subscribe((res) => {
        this.resp = res;
        this.cliente = this.resp;
      });
    });

  }



  creafattura(form: any) {
    this.newInvoice = {
      id: 0,
      numero: 0,
      anno: '',
      importo: 0,
      data: '',
      stato: { id: 0, nome: '' },
      cliente: {

      },
    };

    this.newInvoice.data = form.value.data;
    this.newInvoice.anno = this.newInvoice.data.slice(0, 4);
    this.newInvoice.importo = form.value.importo;
    this.newInvoice.numero = form.value.numFatt;
    this.newInvoice.stato.id = form.value.stato;
    this.newInvoice.cliente.id = this.cliente.id;
    this.invoiceSrv.createInvoice(this.newInvoice).subscribe();
    this.router.navigate(['/clienti']);
  }
























}
