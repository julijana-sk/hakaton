export interface Product {
  id: number;
  price: number;
  title: string;
  images: string[];
  description: string;
  quantity: number;
  date: string;
  category: string;
  type: string;
  isAccessory: boolean;
  isDiscounting: boolean;
  isFavorite: boolean;
  isAddedToCard: boolean;
}
