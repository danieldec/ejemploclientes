import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Clientes } from './clientes';
import { of, Observable } from 'rxjs';
@Injectable({
  //si se quita el providenIn se debe declarar el servicio en el archivo app.modules.ts
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes(): Observable<Clientes[]> {
    return of(CLIENTES);
  }

}
