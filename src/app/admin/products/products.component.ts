import { CookieServicesService } from './../../services/cookie-services.service';
import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  baseurl = this.api.baseurl;
  products: any;
  id: string = "";
  status:string="";
  instock:string="";


  constructor(public api: ApiServicesService, private cookie: CookieServicesService) { }

  ngOnInit(): void {
    this.list();
  }
  list() {
    this.api.post("product/list", { data: {} }).subscribe((mydata: any) => {
      this.products = mydata.data;
      console.log(this.products);

    });
  }

  delete(id: string): void {
    if (confirm("Sure to delete?")) {
      let data = { id: id };
      this.api.post("product/delete", { data: data }).subscribe((mydata: any) => {
        this.list();
      });
    }
  }

  changestatus(id:string):void{
    if (confirm("Sure to change status?")) {
      let data = { id: id };
      this.api.post("product/get", { data: data }).subscribe((mydata: any) => {
        this.list();
        this.status = mydata.data.status;
        if(this.status == "Open"){
          let data = { id: id, status:"Close" };
          this.api.post("product/changestatus", { data: data }).subscribe((mydata: any) => {
            this.list();
          });
        }
         else{
          let data = { id: id, status:"Open" };
          this.api.post("product/changestatus", { data: data }).subscribe((mydata: any) => {
            this.list();
          });
        }
      });
    }
  }



  changeinstock(id:string):void{
    if (confirm("Sure to change instock?")) {
      let data = { id: id };
      this.api.post("product/get", { data: data }).subscribe((mydata: any) => {
        this.list();
        this.instock = mydata.data.instock;
        if(this.instock == "Yes"){
          let data = { id: id, instock:"No" };
          this.api.post("product/changeinstock", { data: data }).subscribe((mydata: any) => {
            this.list();
          });
        }
         else{
          let data = { id: id, instock:"Yes" };
          this.api.post("product/changeinstock", { data: data }).subscribe((mydata: any) => {
            this.list();
          });
        }
      });
    }
  }

}
