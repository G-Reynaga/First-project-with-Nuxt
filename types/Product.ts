export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    images: string[];
    thumbnail: string;
    rating: number;
    description: string
    stock: number
    brand: string
    reviews: Review[]
}

export interface Category {
    name: string;
}

interface Review {
    rating: number;
    comment: string;
    date: string; // O puedes usar Date si prefieres
    reviewerName: string;
    reviewerEmail: string;
}