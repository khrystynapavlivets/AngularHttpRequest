export interface IDiscount{
    id: number;
    description: string;
    imagePath: string;
}
export interface IDiscountRequest {
   
    description: string;
    imagePath: string;
}

export interface IDiscountResponse extends IDiscountRequest {
    id: number;
}