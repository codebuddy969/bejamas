import { useContext } from 'react';

import Image from 'next/image';
import styles from '@/styles/components/featured.module.scss';

import { iServerData } from '@/utilities/interfaces/serverData';

import { ServerDataContext } from '@/utilities/contexts/serverData';

const Featured = () => {

    const value = useContext(ServerDataContext) as iServerData;

    return (
        <div className={styles.featured}>
            <h1>{value.data.featured.name} </h1>
            <div className={styles.image}>
                <Image src={value.data.featured.image.src} 
                       alt={value.data.featured.image.alt} 
                       layout='fill' 
                       objectFit='cover' 
                       loader={({src}) => `${src}`} />
            </div>
            <button className='btn-primary'>Add to cart</button>
        </div>
    )
}
  
export default Featured;