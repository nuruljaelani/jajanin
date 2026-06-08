export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'makanan' | 'minuman';
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Risol Ayam Pedas',
    description: 'Risoles renyah dengan isian ayam suwir pedas nagih.',
    price: 15000,
    image: '/products/split_1_1.png',
    category: 'makanan'
  },
  {
    id: '2',
    name: 'Risol Matcha Lumer',
    description: 'Risoles manis lumer dengan filling matcha premium.',
    price: 18000,
    image: '/products/split_1_3.png',
    category: 'makanan'
  },
  {
    id: '3',
    name: 'Risol Coklat lumer',
    description: 'Risoles manis lumer dengan dark chocolate.',
    price: 18000,
    image: '/products/split_2_1.png',
    category: 'makanan'
  },
  // {
  //   id: '4',
  //   name: 'Kopi Susu Gula Aren',
  //   description: 'Espresso blend lokal dengan creamy milk dan aren asli.',
  //   price: 25000,
  //   image: '/kopi.png',
  //   category: 'minuman'
  // },
  // {
  //   id: '5',
  //   name: 'Iced Matcha Latte',
  //   description: 'Kyoto matcha dengan fresh milk yang creamy.',
  //   price: 28000,
  //   image: '/matcha.png',
  //   category: 'minuman'
  // },
  // {
  //   id: '6',
  //   name: 'Fresh Mango Smash',
  //   description: 'Jus mangga asli segar, tanpa pemanis buatan.',
  //   price: 22000,
  //   image: '/jus.png',
  //   category: 'minuman'
  // }
];
