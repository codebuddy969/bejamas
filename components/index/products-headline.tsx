import Image from 'next/image';
import styles from '@/styles/components/products-headline.module.scss';

const ProductsHeadline = () => {
    return (
        <div className={styles.headline}>
            <h2>
                <strong>Photography</strong>
                <span>/</span>
                Premium Photos
            </h2>
            <button>
                <Image src='/filters.svg' alt='Filters icon' layout='fill' objectFit='contain' />
            </button>
        </div>
    )
}
  
export default ProductsHeadline;