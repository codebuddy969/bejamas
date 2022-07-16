import { useContext } from 'react';

import ProductsCard from '@/components/index/products-card';
import Pagination from '@/components/index/pagination';

import styles from '@/styles/components/products.module.scss';

import { iServerData } from '@/utilities/interfaces/serverData';

import { ServerDataContext } from '@/utilities/contexts/serverData';

const Products = () => {

    const value = useContext(ServerDataContext) as iServerData;

    const products = value?.data?.products || [];

    return (
        <div className={styles.products}>
            <div className={styles.container}>
                {products.map(product => {
                    return <ProductsCard key={product.id} 
                                        id={product.id} 
                                        name={product.name} 
                                        category={product.category}
                                        price={product.price}
                                        currency={product.currency}
                                        image={product.image}
                                        bestseller={product.bestseller} 
                                        featured={product.featured} />
                })}
            </div>
            <Pagination />
        </div>
    )
}
  
export default Products;