import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-custmer-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './custmer-list.component.html',
  styleUrl: './custmer-list.component.css'
})
export class CustmerListComponent {

  constructor(private customerService: CustomerService){

  }

  customers: any;

  ngOnInit(){
    this.customers = this.customerService.getCostumers();
  }
}
