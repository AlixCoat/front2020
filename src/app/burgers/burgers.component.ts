import { Component, OnInit } from '@angular/core';
import { BurgersService } from '../burgerservice/api/burgers.service'
import { Burger } from '../burgerservice';

@Component({
    selector: 'app-burgers',
    templateUrl: './burgers.component.html',
    styleUrls: ['./burgers.component.css']
  })
  
  export class BurgersComponent implements OnInit {
    
    //Variable pour stocker la liste des burgers
    burgers: Burger[];

    constructor(private burgerService: BurgersService) { }
    
    //Initialise la page 
    ngOnInit(): void {
      this.getBurgers();
    }

    //Récupére des burgers et les stocke dans burgers
    getBurgers(): void {
       this.burgerService.listBurgers()
       .subscribe(burgers => this.burgers = burgers);
    }
   
  }