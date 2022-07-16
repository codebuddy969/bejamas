import {useState} from 'react';

import Image from 'next/image';
import styles from '@/styles/components/sort.module.scss';

import {useDetectClickOutside} from 'react-detect-click-outside';

const Sort = () => {

    const [status, setStatus] = useState(false);

    const ref = useDetectClickOutside({ onTriggered: () => status && setStatus(false) });

    return (
        <div className={`${styles.sort} ${status && styles['list-visible']}`} ref={ref}>
            <button className={styles.trigger} onClick={() => setStatus(!status)}>
                <span className={styles.image}>
                    <Image src='/sort.svg' alt='sort icon' layout='fill' objectFit='contain' />
                </span>
                <span className={styles.text}>Sort by</span> Price <span className={styles.arrow}></span>
            </button>
            <ul className={styles.list}>
                <li>
                    <button>Alphabetically</button>
                </li>
                <li>
                    <button>Price</button>
                </li>
            </ul>
        </div>
    )
}
  
export default Sort;