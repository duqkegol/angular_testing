import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-josue',
  templateUrl: './josue.component.html',
  styleUrls: ['./josue.component.css']
})
export class JosueComponent {
  menores: string[] = [];
  nombre_menor: string = '';
  apellido_menor: string = '';

  listar_menor(){
    // console.log(this.nombre_menor)
    // console.log(this.apellido_menor)
    let nombre_completo = this.nombre_menor + ' ' + this.apellido_menor;
    this.menores.push(nombre_completo);
  }
}
