import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { NgFor, NgIf } from '@angular/common';
import { error } from 'console';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  products:any[] = []
  loader = true
  userNames:{[userId:number]: {username:string}}  ={}
product: any;
  
  constructor(private productService:ProductService){}


  ngOnInit(){
    this.loadProducts()
  }
  
  loadProducts(){
    this.loader = true
    this.productService.fetchProduct().subscribe({
      next: (productData) =>{

        this.products = productData
       // this.loadUserNames()
        this.loader = false
  
      },error:(error)=>{
        console.log(error);
        
      }
    })
  
  }
}