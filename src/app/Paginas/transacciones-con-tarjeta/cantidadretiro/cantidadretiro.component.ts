import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cantidadretiro',
  templateUrl: './cantidadretiro.component.html',
  styleUrls: ['./cantidadretiro.component.css']
})
export class CantidadretiroComponent{

  buttons: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', '0', '✓'];
  numeroIdentificacion: string = '';
  constructor(private router: Router) {}

  processButton(button: string): void {
    if (button === 'X') {
      this.numeroIdentificacion = '';
    }
    else if (button === '✓') {
      //this.router.navigate(['tipos/depositos/identification/cuenta']);
      //g
    }
    else {
      if (this.numeroIdentificacion.length == 10) {
        return;
      }
      this.numeroIdentificacion += button;
    }
  }

}
