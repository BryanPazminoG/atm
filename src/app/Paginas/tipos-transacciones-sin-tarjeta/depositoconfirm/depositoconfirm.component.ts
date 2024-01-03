import { Component, OnInit } from '@angular/core';
import { BuscarcuentaService } from 'src/app/shared/services/buscarcuenta.service';
import { BuscarCuenta } from 'src/app/shared/interfaces/buscarcuenta';

@Component({
  selector: 'app-depositoconfirm',
  templateUrl: './depositoconfirm.component.html',
  styleUrls: ['./depositoconfirm.component.css']
})
export class DepositoconfirmComponent implements OnInit{
  constructor(private buscarcuentaservice: BuscarcuentaService) {

  }
  ngOnInit(): void {
    //this.buscarcuenta();
  }
  BuscarCuenta(numeroCuenta: string) {
    this.buscarcuentaservice.buscarcuenta(numeroCuenta).subscribe({
      next: (response) => {
        console.log(response);
      }

    });

  }

}
