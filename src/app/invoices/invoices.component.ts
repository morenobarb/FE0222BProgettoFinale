import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/interfaces/invoice';
import { InvoiceService } from '../services/invoice.service';


@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
})
export class InvoicesComponent implements OnInit {
  constructor(private invoiceSrv: InvoiceService) {}
  invoices!: Array<Invoice>;
  resp: any;
  actualPAge: any;
  numberPage: any;
  ngOnInit(): void {
    this.invoiceSrv.getAll(0).subscribe((x)=>{
      this.resp=x;
      this.invoices=this.resp.content;
      const numberPage = Array(this.resp.totalPages);
      this.numberPage= numberPage;
    }
    );
  }

  changePage(page:number) {
    this.invoiceSrv.getAll(page).subscribe((x)=>{
      this.resp=x;
      this.invoices= this.resp.content;
      this.actualPAge=page;
    });
  }

  canc(id:number, i:number) {
    this.invoiceSrv.delete(id).subscribe(()=>{
      this.invoices.splice(i,1);
    }
    );
  }



}
