import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  usuario={
    nombre:"",
    password:""
  };


  irHome(){
    return this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
