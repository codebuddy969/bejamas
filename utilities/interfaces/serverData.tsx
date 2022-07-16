export interface iProduct {
    id: number;
    name: string;
    category: string;
    price: number;
    currency: string;
    image: {
        src: string;
        alt: string;
    },
    bestseller: boolean;
    featured: boolean;
    details?: string|null;
}

export interface iCategories {
    name: string;
}

export interface iServerData {
    data: {
        categories: iCategories[],
        products: iProduct[],
        featured: iProduct
    },
}