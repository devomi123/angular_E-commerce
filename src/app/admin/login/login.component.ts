import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { CookieServicesService } from 'src/app/services/cookie-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any;
  constructor(private api: ApiServicesService, private cookie: CookieServicesService, private router: Router) { }

  ngOnInit(): void {

    this.data = new FormGroup({
      email: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required]))
    })
  }
  submit(data: any) {

    let mydata = { data: data }
    this.api.post("admin/login", mydata).subscribe((result: any) => {
      if (result.data.status == "success")
      {
       this.cookie.set("usertype","admin");
       this.cookie.set("name","Administrator");
       this.cookie.set("userid","0");
       this.router.navigate(["./admin/products"])
      //  window.location.href="./admin/products"

      }
       else{
         alert("Invalid Credential")
       }
    })
  }
}
