import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent implements OnInit {

  products:any="";

  constructor(public api:ApiServicesService) { }


  ngOnInit(): void {
    this.api.post("product/list",{}).subscribe((data:any)=>{
     this.products=data.data;
    });
  }

}
