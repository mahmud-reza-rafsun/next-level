// Utility Types

type Product = {
    id: number;
    name: string;
    price: string;
    stock: number;
    color?: string;
}

type ProductSummery = Pick<Product, "id" | "name" | "price">

type ProductWithoutStock = Omit<Product, "stock" | "color">

type ProductWithColor = Required<Product>

const product: ProductWithColor = {
    id: 222,
    name: "Mouse",
    price: "25",
    stock: 10,
    color: 'black'
};

type OptionProduct = Partial<Product>