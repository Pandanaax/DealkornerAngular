import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DealsService } from 'src/app/deals.service';
import { Deal } from 'src/models/deal';

@Component({
  selector: 'app-listedeal',
  templateUrl: './listedeal.component.html',
  styleUrls: ['./listedeal.component.css']
})
export class ListedealComponent implements OnInit {
      allDeals : Deal[];
    constructor(private router : Router, private dealService: DealsService) { }

    ngOnInit() {
      this.getAllDeals();
    }
    getAllDeals(): void {
      this.dealService.getAllDeals().subscribe((result) => this.allDeals = result);
  }
}
