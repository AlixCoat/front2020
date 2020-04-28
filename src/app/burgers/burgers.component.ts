import { Component, OnInit } from '@angular/core';

import { BurgersService } from '../burgerservice/api/burgers.service'
import { Burger } from '../burgerservice';

@Component({
    selector: 'app-burgers',
    templateUrl: './burgers.component.html',
    styleUrls: ['./burgers.component.css']
  })
  
  export class BurgersComponent implements OnInit {
    
    burgers: Burger[];

    constructor(private burgerService: BurgersService) { }
    
    ngOnInit(): void {
      this.getBurgers();
    }

    getBurgers(): void {
       this.burgerService.listBurgers()
       .subscribe(burgers => this.burgers = burgers);
    }
   
  }