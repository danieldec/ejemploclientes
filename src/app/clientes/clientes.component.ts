import { ClienteService } from './cliente.service';
import { Component, OnInit } from '@angular/core';

import { Clientes } from './clientes';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Clientes[];
  constructor(private clientesService: ClienteService) {
  }

  ngOnInit() {
    this.clientesService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

}
