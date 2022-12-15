export interface Product {
    id: number;
    imgCover: string;
    productName: string;
    newPrice: number;
    link: string;
    additionalInfo: string;
    created_at: string;
}

export interface IAddProduct {
    imgCover: string;
    productName: string;
    newPrice: number;
    link: string;
    additionalInfo: string;
}