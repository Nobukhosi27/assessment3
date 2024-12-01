import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  userId:any
userProduct:any[]=[]

constructor(private productService:ProductService , private route:ActivatedRoute){

}

ngOnInit(){
  this.route.params.subscribe(params =>{
    this.userId = +params['/userId']
    this.loadUserProducts()
  })
}

loadUserProducts(){
this.productService.fetchUserProduct(this.userId).subscribe({
  next:(products)=>{
    this.userProduct = products.products
    
    

  },error:(error)=>{
        console.log(error);
        
      }
})
}

}
