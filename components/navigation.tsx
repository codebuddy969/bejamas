import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/navigation.module.scss';

import ProductsCart from '@/components/index/products-cart';

const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles.container}>
                <Link href="/" passHref>
                    <a className={styles.logo}>
                        <Image src='/logo.svg' alt='Logo of a bejamas company' layout='fill' objectFit='cover' />
                    </a>
                </Link>
                <ProductsCart />
            </div>
        </div>
    )
}
  
export default Navigation;
  