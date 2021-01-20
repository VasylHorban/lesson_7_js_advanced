import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  list =  [ { name: 'Milk', price: '$6', expirationDate: new Date('2021,1,25'), category: 'dairy products' },
    { name: 'Cheese', price: '$13', expirationDate: new Date('2021,1,20'), category: 'dairy products' },
    { name: 'Bread', price: '$3', expirationDate: new Date('2021,1,22'), category: 'baking' },
    { name: 'Сroissant', price: '$5', expirationDate: new Date('2021,1,24'), category: 'baking' },
    { name: 'Sausages', price: '$16', expirationDate: new Date('2021,1,19'), category: 'meat products' },
    { name: 'Ham', price: '$18', expirationDate: new Date('2021,1,27'), category: 'meat products' }
  ];
  
  checkValid(date: string) : number{
    let now = Date.now();
    let expDateMs = Date.parse(date);
    let difference = (expDateMs - now)/1000/60/60;
    if(difference <= 0){
      return 2
    }else if(difference <= 48){
      return 1
    }
    return 0
  
  }
  
}
