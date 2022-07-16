import { iServerData, iCategories, iProduct } from '@/utilities/interfaces/serverData';

export const categories: iCategories[] = [
    { name: "people" },
    { name: "premium" },
    { name: "pets" },
    { name: "food" },
    { name: "landmarks" },
    { name: "cities" },
    { name: "nature" }
]

const images = [
    '160846/french-bulldog-summer-smile-joy-160846',
    '2274209/pexels-photo-2274209',
    '6898856/pexels-photo-6898856',
    '3730754/pexels-photo-3730754',
    '1078090/pexels-photo-1078090',
    '4587954/pexels-photo-4587954'
]

const product = (id: number) => {
    return {
        id,
        name: 'French bulldog summer smile joy',
        category: categories[Math.floor(Math.random() * 7)].name,
        price: Math.floor(Math.random() * 100) + 1,
        currency: "USD",
        image: {
            src: `https://images.pexels.com/photos/${images[Math.floor(Math.random() * 6)]}.jpeg?auto=compress&cs=tinysrgb&w=600&h=900&dpr=1`,
            alt: 'French bulldog summer smile joy'
        },
        bestseller: Math.floor(Math.random() * 2) ? true : false,
        featured: Math.floor(Math.random() * 2) ? true : false,
        details: null
    }
}

let list: iProduct[] = [];

for(let i = 0; i < 100; i++) {
    list = [...list, product(i)];
}

export const productsList: iProduct[] = list;