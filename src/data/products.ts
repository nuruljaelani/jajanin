export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'makanan' | 'minuman';
  isReady?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Risol Ayam Original',
    description: 'Risoles renyah dengan isian ayam suwir original.',
    price: 2000,
    image: '/products/split_1_1.png',
    category: 'makanan'
  },
  {
    id: '2',
    name: 'Risol Matcha Lumer',
    description: 'Risoles manis lumer dengan filling matcha premium.',
    price: 3000,
    image: '/products/split_1_3.png',
    category: 'makanan',
    isReady: false
  },
  {
    id: '3',
    name: 'Risol Coklat lumer',
    description: 'Risoles manis lumer dengan dark chocolate.',
    price: 3000,
    image: '/products/split_2_1.png',
    category: 'makanan',
    isReady: false
  },
  {
    id: '4',
    name: 'Seblak',
    description: 'Seblak dengan level pedas 1-10 sesuai selera.',
    price: 5000,
    image: '/products/seblak.png',
    category: 'makanan'
  },
  {
    id: '5',
    name: 'Mi Ayam',
    description: 'Mi dengan daging ayam cincang dan sayuran segar.',
    price: 8000,
    image: '/products/mi-ayam.png',
    category: 'makanan'
  },
];
