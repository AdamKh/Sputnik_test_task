import styles from "./ProductCard.module.scss";
import { type ProductCardProps } from "@/shared/api/types";

function formatPrice(
  priceKopecks: number,
  currency: "RUB" | "USD" | "EUR"
): string {
  const priceRub = priceKopecks / 100;
  const currencyMap = {
    RUB: "ru-RU",
    USD: "en-US",
    EUR: "de-DE",
  };

  return new Intl.NumberFormat(currencyMap[currency], {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
  }).format(priceRub);
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  origin,
  price,
  imageURL,
}) => {
  return (
    <div className={styles.productCard}>
      <img className={styles.image} src={imageURL} alt={title} />
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.origin}>Origin: {origin}</p>
        <p className={styles.price}>
          {formatPrice(price.value, price.currency)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
