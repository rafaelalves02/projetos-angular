import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  private customers = [
      {id: 1,nome: 'Rafael'},
      {id: 2,nome: 'Maria'},
      {id: 3,nome: 'vagner'}
    ];

  getCostumers(){
    return this.customers;
  }

  getById(id: number){

    let customer = this.customers.find(c => {
      return c.id === id;
    })

    return customer;
  }
}
