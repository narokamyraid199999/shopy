export interface productDetails {
  id?: number;
  description?: string;
  quantity: number;
  img: string | string[];
  category: string;
  title: string;
  reviews: number;
  price: number;
  discount?: number;
}

export interface productDescription {
  id?: number;
  description: string;
  quantity: number;
  img: string[];
  category: string;
  title: string;
  reviews: number;
  price: number;
  discount?: number;
}
