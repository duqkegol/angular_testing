import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
      this.datos.subscribe(x =>{
        console.log(x)
      })
  }
  
  title = 'angular_testing';
  miPropiedad = 'Hola';
  miArreglo: any = [1,7, 9];

  datos = this.http.get('http://app.digitalgene.com.devel/get-tableros-prueba');
}
