import { Component, OnInit, Input } from '@angular/core';
import { Burger } from '../burgerservice/model/burger';
import { BurgersService } from '../burgerservice/api/burgers.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-burger-detail',
  templateUrl: './burger-detail.component.html',
  styleUrls: ['./burger-detail.component.css']
})
export class BurgerDetailComponent implements OnInit {
 
  @Input() burger: Burger;

  constructor(
    private route: ActivatedRoute,
    private burgerservice: BurgersService
  ) { }

  ngOnInit() {
    this.getBurger();
  }

  getBurger(): void {
    const id = +this.route.snapshot.paramMap.get('id');
     this.burgerservice.burgerDetail(id)
      .subscribe(burger => this.burger = burger)
  }

}