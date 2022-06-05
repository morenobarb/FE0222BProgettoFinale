import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Client } from 'src/interfaces/client';
import { Comune } from 'src/interfaces/comune';
import { Provincia } from 'src/interfaces/provincia';
import { ClienteService } from '../services/cliente.service';
import { ComunieprovinceService } from '../services/comunieprovince.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-adjustment',
  templateUrl: './client-adjustment.component.html',
  styleUrls: ['./client-adjustment.component.scss'],
})
export class ClientAdjustmentComponent implements OnInit {
  constructor(
    private comProvSrv: ComunieprovinceService,
    private route: ActivatedRoute,
    private clientSrv: ClienteService,
    private fb: FormBuilder,
private router : Router
  ) {}
  id!: number;
  comuni!: any[];
  province!: any[];
  resp: any;
  cliente!: any;
  form!: FormGroup;
  idCliente!: number;
  Clientemodificato!: Client;

  ngOnInit(): void {
    this.comProvSrv.getProvince(0).subscribe((province) => {
      this.resp = province;
      this.province = this.resp.content;
    });
    this.comProvSrv.getComuni(0).subscribe((comuni) => {
      this.resp = comuni;
      this.comuni = this.resp.content;
    });
    this.route.params.subscribe((params: Params) => {
      this.idCliente = +params['id'];
      this.clientSrv.getById(this.idCliente).subscribe((clienti) => {
        this.cliente = clienti;
      });
    });

    this.inizializzaForm();
  }

  inizializzaForm() {
    this.form = this.fb.group({
      ragioneSociale: new FormControl('', [Validators.required]),
      partitaIva: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      tipoCliente: new FormControl('', [Validators.required]),
      pec: new FormControl('', Validators.email),
      telefono: new FormControl(''),
      nomeContatto: new FormControl(''),
      cognomeContatto: new FormControl(''),
      telefonoContatto: new FormControl(''),
      emailContatto: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      indirizzoSedeOperativa: this.fb.group({
        via: new FormControl(''),
        civico: new FormControl(''),
        cap: new FormControl(''),
        localita: new FormControl(''),
        comune: this.fb.group({
          id: new FormControl('', [Validators.required]),
          provincia: this.fb.group({
            id: new FormControl(''),
          }),
        }),
      }),
    });
  }

  modiClient(form:any){
this.clientSrv.modif(this.idCliente, form.value).subscribe();
form.reset();
//console.log(form.value);
setTimeout(() => {
  this.router.navigate(['/clienti'])
}, 1000);
  }
}
