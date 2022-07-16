import ProductsCard from '@/components/index/products-card';
import Pagination from '@/components/index/pagination';

import styles from '@/styles/components/products.module.scss';

const Products = () => {
    return (
        <div className={styles.products}>
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <Pagination />
        </div>
    )
}
  
export default Products;