import React, {useState} from 'react';

import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/product-cart.module.scss';

import {useDetectClickOutside} from 'react-detect-click-outside';

const ProductsCart = () => {

    const [status, setStatus] = useState(false);

    const ref = useDetectClickOutside({ onTriggered: () => status && setStatus(false) });

    return (
        <div className={styles.cart} ref={ref}>
            <button className={styles.trigger} onClick={() => setStatus(!status)}>
                <Image src='/cart.svg' alt='Logo of a bejamas company' layout='fill' objectFit='cover' />
                <span>4</span>
            </button>

            <div className={`${styles.list} ${status && styles['list-visible']}`}>
                <button className={styles.close} onClick={() => setStatus(false)}></button>
                <ul>
                    <li>
                        <div className={styles.info}>
                            <Link href="/" passHref>
                                <a>Samurai King Resting</a>
                            </Link>
                            <span>$10000.00</span>
                        </div>
                        <div className={styles.image}>
                            <Image src='/dog.png' alt='iMage of a dog' layout='fill' objectFit='cover' />
                        </div>
                    </li>

                    <li>
                        <div className={styles.info}>
                            <Link href="/" passHref>
                                <a>Samurai King Resting</a>
                            </Link>
                            <span>$10000.00</span>
                        </div>
                        <div className={styles.image}>
                            <Image src='/dog.png' alt='iMage of a dog' layout='fill' objectFit='cover' />
                        </div>
                    </li>

                    
                </ul>
                <button className='btn-primary btn-primary--outlined'>
                    Clear
                </button>
            </div>
        </div>
    )
}
  
export default ProductsCart;