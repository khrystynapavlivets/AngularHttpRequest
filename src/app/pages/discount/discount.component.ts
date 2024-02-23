import { Component, OnInit } from '@angular/core';
import { DiscountService } from '../../shared/services/discount/discount.service';
import { CommonModule } from '@angular/common'
import { IDiscountResponse } from '../../../../src/app/shared/interfaces/discount/discount.interface';

@Component({
  selector: 'app-discount',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discount.component.html',
  styleUrl: './discount.component.scss'
})
export class DiscountComponent implements OnInit {

  public userDiscounts: Array<IDiscountResponse> = [];

  constructor(
    private discountService: DiscountService
  ) { }

  ngOnInit(): void {
    this.getDiscounts();
  }

  getDiscounts(): void {
    this.discountService.getAll().subscribe(data => {
      this.userDiscounts = data;
    })
  }

}
