import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    // this.datos.subscribe(x =>{
    //   console.log(x)
    // })
  }
  images = ['assets/17010.jpg', 'assets/dk.jpg', 'assets/Oliver_Atom_Adolescente.png'];
  imagen_carga = '';
  flag = true;
  lol(event: any) {
    let img_cont = document.getElementById('img-cont');
    let imgUrl = event.target.dataset.imgurl;
    this.imagen_carga = imgUrl;
    // console.log(imgUrl);
  }
  
  lol2(event: any) {
    console.log(event.target.src);
  }
  
  // name! : string;
  // title = 'angular_testing';
  // miPropiedad = 'Hola';
  // miArreglo: any = [1,7, 9];

  // datos = this.http.get('http://app.digitalgene.com.devel/get-tableros-prueba');
}
