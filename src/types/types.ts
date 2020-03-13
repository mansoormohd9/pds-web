export interface Product {
  name: string;
  price: number;
  imageLink: string;
  rating: number;
  categoryId: number;
}

export interface ProductCategoty {
  id: number;
  name: string;
}

export interface SubCategoty {
  id: number;
  categoryId: number;
  name: string;
}

export interface Blog {
  title: string;
  description: string;
  dateAdded: Date;
  imageLink: string | null 
}

export interface Carousel {
  title: string;
  subTitle: string | null;
  description: string | null;
  isFeatured: boolean;
}