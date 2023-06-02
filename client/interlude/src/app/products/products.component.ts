import { Component } from '@angular/core';
import { Products } from '../interfaces/products.interface';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  productsAPI:any[] = []

  constructor(private http:HttpClient){

  }

    ngOnInit(): void {
      this.http.get<Product>("http://localhost:4600/displayAvailableProducts").subscribe(response =>{
        console.log(response.productData)
        this.productsAPI = response.productData
      })
    }



 alertTest(){
  alert('You just clicked add to cart')
 }
}
