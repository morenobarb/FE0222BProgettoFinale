import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from 'src/interfaces/invoice';
import { ClienteService } from '../services/cliente.service';
import { InvoiceService } from '../services/invoice.service';

@Component({
  selector: 'app-clients-invoices',
  templateUrl: './clients-invoices.component.html',
  styleUrls: ['./clients-invoices.component.scss']
})
export class ClientsInvoicesComponent implements OnInit {

  constructor(private clientSrv : ClienteService, private route : ActivatedRoute, private invoiceSrv : InvoiceService) { }

resp:any;
invoices! : Invoice[]
numberPage : any;
id!:number;

  ngOnInit(): void {
    this.route.params.subscribe((params =>{
      this.id = +params['id'];
      this.loadDetails(this.id);
    }
      ));
  }

loadDetails(id:number) {
  this.clientSrv.getFattureByCliente(id,0).subscribe((z) => {
    this.resp = z;
    this.invoices= this.resp.content;
    const numberPage = Array(this.resp.totalPages);
    this.numberPage= numberPage;
  })
}
canc(id: number, i: number) {
  this.invoiceSrv.delete(id).subscribe(() => {
    this.invoices.splice(i, 1);
  });
}
changePage(page:number) {
  this.clientSrv.getFattureByCliente(this.id, page).subscribe((z)=>{
this.resp= z;
this.invoices= this.resp.content;
  }
  )
}







}
