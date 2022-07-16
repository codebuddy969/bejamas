import Image from 'next/image';
import styles from '@/styles/components/products-headline.module.scss';

import Sort from '@/components/index/sort';

const ProductsHeadline = () => {
    return (
        <div className={styles.headline}>
            <h2>
                <strong>Photography</strong>
                <span>/</span>
                Premium Photos
            </h2>
            <Sort />
            <button className={styles['mobile-trigger']}>
                <Image src='/filters.svg' alt='Filters icon' layout='fill' objectFit='contain' />
            </button>
        </div>
    )
}
  
export default ProductsHeadline;