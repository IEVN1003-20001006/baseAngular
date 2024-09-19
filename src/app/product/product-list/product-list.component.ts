import { Component } from '@angular/core';
import { IProducto } from '../producto';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  title="Saludo de variable";
  imageWidth:number=50;
  imageMargi:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }
  productos:IProducto[]=[
    {
      "productoId":1,
      "Modelo": 'sentra',
      "Descripcion":"4 puertas familiar",
      "year":"Febrero 3 2022",
      "Precio": 20000,
      "Marca": "NISSAN",
      "Color":"Morado",
      "imagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIWfEs0NRY8hHXKzbJjbj-864BvwF8fkZnLA&s"
    },
    {
      "productoId":2,
      "Modelo": 'A4',
      "Descripcion":"2 puertas",
      "year":"marzo 3 2022",
      "Precio": 30000,
      "Marca": "ADI",
      "Color":"Blanco",
      "imagenUrl":"https://acroadtrip.blob.core.windows.net/publicaciones-imagenes/Large/audi/a4/mx/RT_PU_d50b9c204dea43f897e09559026f0d7f.webp"
    },
    {
      "productoId":3,
      "Modelo": 'Rio',
      "Descripcion":"4 puertas familiar",
      "year":"agosto 3 2022",
      "Precio": 60000,
      "Marca": "KIA",
      "Color":"Azul",
      "imagenUrl":"https://static.retail.autofact.cl/blog/c_img_740x370.1aqcsb1k70s0p2z.jpg"
    }
  ]
  
}