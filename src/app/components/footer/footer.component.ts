import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

   subscribe:any="";
   email:string="";
  constructor(private api: ApiServicesService, private router:Router ) { }

  ngOnInit(): void {
this.subscribe = new FormGroup({
  email:new FormControl("",Validators.compose([Validators.required]))
})

  }


subscription(subscribe:any){
  let data ={ data:subscribe };
  this.api.post("subscription/save",data).subscribe((data:any)=>{
    this.email = data.email;
    alert("Subscribed");
    window.location.href="/"
  })

}

}
