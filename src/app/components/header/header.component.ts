import { Component, OnInit } from '@angular/core';
import { CookieServicesService } from 'src/app/services/cookie-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 adminlogin:boolean=false;
 admin:boolean=false;
  constructor(private cookie:CookieServicesService) { }

  ngOnInit(): void {

    if (this.cookie.get("usertype") == "admin") {
      this.adminlogin = true;
      // console.log("ngoninit"+ this.adminlogin);

    }
 }

 logout() {
  this.cookie.delete("usertype");
  this.cookie.delete("name");
  this.cookie.delete("userid");
  window.location.href = "./";
  this.adminlogin = true;
}

}
