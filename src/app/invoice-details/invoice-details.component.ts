import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/interfaces/client';
import { InvoiceService } from '../services/invoice.service';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit {
  invoice: any;
  resp: any;
  client! : Client;


  constructor(private invoiceSrv : InvoiceService, private router: Router , private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.caricaDettagli(id);
    });
  }

  caricaDettagli(id: number) {
    this.invoiceSrv.details(id).subscribe((res) => {
      this.invoice = res;
      this.client = this.invoice.client;
    });
  }

  salva(form: NgForm) {
    this.invoice.stato.id = form.value.stato;
    this.invoiceSrv.modify(this.invoice).subscribe((res) => {
      this.router.navigate(['/fatture']);
    });
  }

  elimina(id: number) {
    this.invoiceSrv.delete(id).subscribe(() => {
      this.router.navigate(['/fatture']);
    });
  }

}
