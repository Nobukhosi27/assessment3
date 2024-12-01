import { Component } from '@angular/core';

import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  {
currentUser:any
  constructor(private authService:AuthService, private router:Router){}

  ngOnInit(){
    this.authService.currentUserP.subscribe(user=>{   
this.currentUser= user
console.log(user);

    })
  }
logout(){
  this.authService.logout()
  this.router.navigate(['/login'])
}
}

  