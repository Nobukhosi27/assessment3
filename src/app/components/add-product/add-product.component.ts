import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent  {
addProduct() {
throw new Error('Method not implemented.');
}

  title =''
  price =''
  description =''
  category = ''
image = ''



constructor(private productService:ProductService){}



  AddProduct(){
  
    
  

  }

}
