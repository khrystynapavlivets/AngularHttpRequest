import { Component, OnInit } from '@angular/core';
import { DiscountService } from '../../shared/services/discount/discount.service';
import { IDiscount } from '../../shared/interfaces/discount/discount.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-discount',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-discount.component.html',
  styleUrl: './admin-discount.component.scss',
})

export class AdminDiscountComponent implements OnInit {
  public adminDiscounts!: IDiscount[];
  public description!: string;
  public imagePath = 'https://la.ua/wp-content/uploads/2021/08/6-1.jpg';
  public editStatus = false;
  public editID!: number;
id: any;


  constructor(
    private discountService: DiscountService
  ) { }

  ngOnInit(): void {
    this.getDiscounts();
  }

  getDiscounts(): void {
    this.discountService.getAll().subscribe(data => {
      this.adminDiscounts = data;
      console.log(data)
    })
    
  }

  addDiscount(): void {

    const newDiscount = {
   
      description: this.description,
      imagePath: this.imagePath
    };
    this.discountService.create(newDiscount).subscribe(() => {
      this.getDiscounts();
      this.resetForm();
    })

  }

  editDiscount(discount: IDiscount): void {
    this.description = discount.description;
    this.imagePath = discount.imagePath;
    this.editStatus = true;
    this.editID = discount.id;
  }

  saveDiscount(): void {
    const updateDiscount = {
      description: this.description,
      imagePath: this.imagePath
    };
    this.discountService.update(updateDiscount, this.editID).subscribe(() => {
      this.getDiscounts();
      this.resetForm();
    })
  }

  deleteDiscount(discount: IDiscount): void {
    if(confirm('Are you sure?')){
      this.discountService.delete(discount.id).subscribe(() => {
        this.getDiscounts();
      })
    }
  }

  private resetForm(): void {
    this.description = '';
    this.imagePath = 'https://la.ua/wp-content/uploads/2021/08/6-1.jpg';
    this.editStatus = false;
  }
}

