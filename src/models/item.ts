export type ItemBasic = {
    id: number;
    image: string;
    name: string;
    category: string;
    price: number;
}

export type Item = {
    id: number;
    name: string;
    description: string;
    images: string;
    category: string;
    subCategory?: string;
    price: number;
    quantity?: number;
    available: boolean;
    highlighted?: boolean;
}
