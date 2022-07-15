import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/products-card.module.scss';

const ProductsCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <div className={styles.label}>Best Seller</div>
                <Image src='/large.png' alt='product image' layout='fill' objectFit='cover' />
                <button className='btn-primary'>Add to cart</button>
            </div>
            <div className={styles.info}>
                <div className={styles.category}>
                    <Link href="/" passHref>
                        <a>People</a>
                    </Link>
                </div>
                <div className={styles.product}>
                    <Link href="/" passHref>
                        <a>Red Bench</a>
                    </Link>
                </div>
                <div className={styles.price}>$3.89</div>
            </div>
        </div>
    )
}
  
export default ProductsCard;