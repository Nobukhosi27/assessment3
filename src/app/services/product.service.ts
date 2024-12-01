import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private apiurl ='https://fakestoreapi.com/products'
private userUrl ='https://fakestoreapi.com/users'

  constructor(private httpClient:HttpClient) { }

  fetchProduct():Observable<any>{
    return this.httpClient.get<any>(this.apiurl)
  }

  fetchUserById(userId:number):Observable<any>{
    return this.httpClient.get<any>(this.userUrl + '/' + userId)
  }
  
  fetchUserProduct(userId:any):Observable<any>{
    return this.httpClient.get<any>(this.userUrl + '/' + userId + '/products')

  }
}
