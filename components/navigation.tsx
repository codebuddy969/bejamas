import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/navigation.module.scss';

import ProductsCart from '@/components/index/products-cart';

import { ServerDataContext } from '@/utilities/contexts/serverData';

const Navigation = () => {

    const value = useContext(ServerDataContext);

    return (
        <div className={styles.navigation}>
            <div className={styles.container}>
                <Link href="/" passHref>
                    <a className={styles.logo}>
                        <Image src='/logo.svg' alt='Logo of a bejamas company' layout='fill' objectFit='contain' />
                    </a>
                </Link>
                <ProductsCart />
            </div>
        </div>
    )
}
  
export default Navigation;
  