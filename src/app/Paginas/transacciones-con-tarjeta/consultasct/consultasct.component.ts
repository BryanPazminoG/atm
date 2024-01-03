import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FlujoDatosService } from 'src/app/shared/services/flujoDatos.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-consultasct',
  templateUrl: './consultasct.component.html',
  styleUrls: ['./consultasct.component.css']
})
export class ConsultasctComponent implements OnInit{

  clientesData = {
    "codigo": 5,
    "apellidos": "Toapanta",
    "nombres": "Edison Javier",
  };
  cuentaData = {
    "codCuenta": 0,
    "numeroCuenta": "",
    "codTipoCuenta": "",
    "codCliente": 0,
    "saldoContable": 0,
    "saldoDisponible": 0,
};
  @ViewChild('contenedor', { static: false }) contenedor!: ElementRef; // Hace una referencia de una parte del html para el uso en la lógica

  constructor(private router: Router, private flujoDatos:FlujoDatosService) { }
  ngOnInit(): void {
    this.cuentaData = this.flujoDatos.GetCuentaData();
    this.clientesData = this.flujoDatos.GetClientesData();
  }

  async Imprimir() {
    const cardContainer = this.contenedor.nativeElement; 
    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 15;
    const topMargin = 10;
    const maxWidth = (pageWidth - 2 * margin);
    const maxHeight = (pageHeight - topMargin - margin);
    let imgWidth = cardContainer.offsetWidth;
    let imgHeight = maxHeight * 3.80;
    const numImg = Math.ceil(cardContainer.offsetHeight / imgHeight);
    let pageY = 0;
    const pdf = new jsPDF('p', 'mm', 'a4');

    for (let index = 0; index < numImg; index++) {
      await html2canvas(cardContainer, {
        x: 0,
        y: pageY,
        width: imgWidth,
        height: imgHeight
      }).then( 
        (canvas) => {
          const imgData = canvas.toDataURL('image/png');
          let imgHeightAjustado = 0;
          let imgWidthAjustado = 0;
          if (imgWidth > maxWidth) {
            imgHeightAjustado = (imgHeight * maxWidth) / imgWidth;
            imgWidthAjustado = maxWidth;
          }

          if (imgHeight > maxHeight) {
            imgWidthAjustado = (imgWidth * maxHeight) / imgHeight;
            imgHeightAjustado = maxHeight;
          }
          const imageX = margin + (maxWidth - imgWidthAjustado) / 2;
          const imageY = topMargin + (maxHeight - imgHeightAjustado) / 2;

          if (index > 0) pdf.addPage();
          pdf.addImage(imgData, 'SVG', 0, 0, imgWidthAjustado - 25, imgHeightAjustado);
          pageY += imgHeight;
        }
      );
    }
    pdf.save('perfil.pdf');
  }
  regresar() {
    this.router.navigate(['transacciont/selecciont']);
  }
}
