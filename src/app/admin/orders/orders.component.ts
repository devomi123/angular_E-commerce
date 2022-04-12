// import { CookieServicesService } from '../../services/cookie-services.service';
import { ApiServicesService } from '../../services/api-services.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-order',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any;
  baseurl = this.api.baseurl;
  imagepath:any;

  // product:any;
  constructor(private api:ApiServicesService) { }

  ngOnInit(): void {
    this.list()
  }
  list() {
    this.api.post("order/list", { data: {} }).subscribe((mydata: any) => {
      this.orders = mydata.data;


    });
  }


}
