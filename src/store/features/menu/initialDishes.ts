import { Dish } from './menuSlice';

export const initialDishes: Dish[] = [
  {
    id: 0,
    title: 'Spicy seasoned seafood noodles',
    category: 'Soup',
    price: 2.29,
    avalible: 20,
    image: '/images/Image 1.png',
    discount: 20,
  },
  {
    id: 1,
    title: 'Salted Pasta with mushroom sauce',
    category: 'Hot dishes',
    price: 2.68,
    avalible: 11,
    image: '/images/Image 2.png',
  },
  {
    id: 2,
    title: 'Beef dumpling in hot and sour soup',
    category: 'Hot dishes',
    price: 2.99,
    avalible: 16,
    image: '/images/Image 3.png',
  },
  {
    id: 3,
    title: 'Healthy noodle with spinach leaf',
    category: 'Cold dishes',
    price: 3.29,
    avalible: 22,
    image: '/images/Image 4.png',
  },
  {
    id: 4,
    title: 'Hot spicy fried rice with omelet',
    category: 'Cold dishes',
    price: 3.49,
    avalible: 13,
    image: '/images/Image 5.png',
  },
  {
    id: 5,
    title: 'Spicy instant noodle with special omelette',
    category: 'Dessert',
    price: 3.59,
    avalible: 17,
    image: '/images/Image 6.png',
  },
  {
    id: 6,
    title: 'Healthy noodle with spinach leaf',
    category: 'Hot dishes',
    price: 3.59,
    avalible: 17,
    image: '/images/Image 7.png',
  },
  {
    id: 7,
    title: 'Beef dumpling in hot and sour soup',
    category: 'Hot dishes',
    price: 2.49,
    avalible: 22,
    image: '/images/Image 8.png',
  },
  {
    id: 8,
    title: 'Spicy instant noodle with special omelette',
    category: 'Hot dishes',
    price: 3.99,
    avalible: 16,
    image: '/images/Image 9.png',
  },
  {
    id: 10,
    title: 'Bowl of creamy carrot soup',
    category: 'Soup',
    price: 4.42,
    avalible: 10,
    image: '/images/Image 10.png',
  },
  {
    id: 11,
    title: 'Bowl of soup with ladle',
    category: 'Soup',
    price: 3.99,
    avalible: 5,
    image: '/images/Image 11.png',
  },
];

export const categories = initialDishes.reduce<string[]>((prev, curr) => {
  const category = curr.category;
  if (!prev.includes(category)) return [...prev, category];
  else return prev;
}, []);
