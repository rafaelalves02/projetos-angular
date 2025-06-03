import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-customers-details',
  imports: [RouterModule],
  templateUrl: './customers-details.component.html',
  styleUrl: './customers-details.component.css'
})
export class CustomersDetailsComponent {

  constructor(private route: ActivatedRoute,private customerService: CustomerService){

  }

  customer: any;

  ngOnInit(){
    //pegar o id da url

    let id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.customer = this.customerService.getById(+id);
    }
  }
}
