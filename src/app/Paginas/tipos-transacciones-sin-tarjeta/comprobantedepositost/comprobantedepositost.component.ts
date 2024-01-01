import { Component, OnInit } from '@angular/core';
import { BuscarcuentaService } from 'src/app/shared/buscarcuenta.service';
import { BuscarCuenta } from 'src/app/shared/interfaces/buscarcuenta';

@Component({
  selector: 'app-comprobantedepositost',
  templateUrl: './comprobantedepositost.component.html',
  styleUrls: ['./comprobantedepositost.component.css']
})
export class ComprobantedepositostComponent {
  constructor(private buscarcuentaservice: BuscarcuentaService) {

  }
  BuscarCuenta(id: string) {
    this.buscarcuentaservice.burcarcuenta(id).subscribe({
      next: (response) => {
        const data: BuscarCuenta = response;
        console.log(data);
      }

    });

  }
}

