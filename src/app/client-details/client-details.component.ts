import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comune } from 'src/interfaces/comune';
import { Provincia } from 'src/interfaces/provincia';
import { ClienteService } from '../services/cliente.service';
import { DetailsclientService } from '../services/detailsclient.service';
import { ComunieprovinceService } from '../services/comunieprovince.service';
import { Client } from 'src/interfaces/client';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss'],
})
export class ClientDetailsComponent implements OnInit {
  constructor(
    private detaClientSrv: DetailsclientService,
    private comuProvSrv: ComunieprovinceService,
    private router: Router,
    private clientSrv: ClienteService,
    private fb: FormBuilder
  ) {}
  form!: FormGroup;
  //clientType: any;
  comuni!: any[];
  province!: any[];
  resp: any;
  newClient!: Client;

  ngOnInit(): void {
   //this.detaClientSrv.tipoClient().subscribe((temp) => {
   //   this.clientType = temp;
    //});
    this.comuProvSrv.getProvince(0).subscribe((temp) => {
      this.resp = temp;
      this.province = this.resp.content;
    });
    this.comuProvSrv.getComuni(0).subscribe((temp) => {
      this.resp = temp;
      this.comuni = this.resp.content;
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

  addClient(form: FormGroup) {

    let indexcomune = this.comuni.findIndex(
      (x) => x.id == form.value.indirizzoSedeOperativa.comune.id.toString()
    );

    let indexprovincia = this.province.findIndex(
      (x) =>
        x.id == form.value.indirizzoSedeOperativa.comune.provincia.id.toString()
    );

    let indexsigla = this.province.findIndex(
      (x) =>
        x.id == form.value.indirizzoSedeOperativa.comune.provincia.id.toString()
    );

    let comuneNome = this.comuni[indexcomune].nome;
    let provinciaNome = this.province[indexprovincia].nome;
    let siglaProvincia = this.province[indexsigla].sigla;
    let cliente = {
      ragioneSociale: form.value.ragioneSociale,
      partitaIva: form.value.partitaIva,
      email: form.value.email,
      pec: form.value.pec,
      telefono: form.value.telefono,
      telefonoContatto: form.value.telefonoContatto,
      nomeContatto: form.value.nomeContatto,
      cognomeContatto: form.value.cognomeContatto,
      tipoCliente: form.value.tipoCliente,
      emailContatto: form.value.emailContatto,
      indirizzoSedeOperativa: {
        via: form.value.indirizzoSedeOperativa.via,
        civico: form.value.indirizzoSedeOperativa.civico,
        cap: form.value.indirizzoSedeOperativa.cap,
        localita: form.value.indirizzoSedeOperativa.localita,
        comune: {
          id: form.value.indirizzoSedeOperativa.comune.id,
          nome: comuneNome,
          provincia: {
            id: form.value.indirizzoSedeOperativa.comune.provincia.id,
            nome: provinciaNome,
            sigla: siglaProvincia,
          },
        },
      },
      indirizzoSedeLegale: {
        via: form.value.indirizzoSedeOperativa.via,
        civico: form.value.indirizzoSedeOperativa.civico,
        cap: form.value.indirizzoSedeOperativa.cap,
        localita: form.value.indirizzoSedeOperativa.localita,
        comune: {
          id: form.value.indirizzoSedeOperativa.comune.id,
          nome: comuneNome,
          provincia: {
            id: form.value.indirizzoSedeOperativa.comune.provincia.id,
            nome: provinciaNome,
            sigla: siglaProvincia,
          },
        },
      },
    };

    this.newClient = cliente;
    this.clientSrv.createClient(this.newClient).subscribe();
    form.reset();
    console.log(this.newClient)
  }
}
