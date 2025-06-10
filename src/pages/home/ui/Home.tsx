// import styles from './Home.module.scss';
import { ProductCard } from "@/widgets/ProductCard";
import { productData } from "@/entities/data";

const Home: React.FC = () => {
  return <ProductCard {...productData} />;
};

export default Home;
