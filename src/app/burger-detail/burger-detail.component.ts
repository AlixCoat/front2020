import { Component, OnInit, Input } from '@angular/core';
import { BurgersService } from '../burgerservice/api/burgers.service'
import { ActivatedRoute } from '@angular/router';
import { BurgerDetail } from '../burgerservice';
import { Location } from '@angular/common';

@Component({
  selector: 'app-burger-detail',
  templateUrl: './burger-detail.component.html',
  styleUrls: ['./burger-detail.component.css']
})
  export class BurgerDetailComponent implements OnInit {
  
    //Les détails du burger sont stockés dans burgerDetail
    @Input() burgerDetail: BurgerDetail;

    constructor(
      private route: ActivatedRoute,
      private burgerservice: BurgersService,
      private location: Location
    ) { }

    //On initialise la page 
    ngOnInit() {
      this.getBurger();
    }

    //Permet de récupérer les informations du burger sélectionné via son id
    getBurger(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.burgerservice.burgerDetail(id)
        .subscribe(burger => this.burgerDetail = burger);
    }

    //Retourne sur la page précédente
    goBack(): void {
      this.location.back();
    }

  }