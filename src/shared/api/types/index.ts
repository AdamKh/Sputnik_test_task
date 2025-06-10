interface ProductCardProps {
  title: string;
  origin: string;
  price: { value: number; currency: "USD" | "EUR" | "RUB" };
  imageURL: string;
}
export type { ProductCardProps };
