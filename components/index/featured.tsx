import Image from 'next/image';
import styles from '@/styles/components/featured.module.scss';

const Featured = () => {
    return (
        <div className={styles.featured}>
            <h1>Samurai King Resting</h1>
            <div className={styles.image}>
                <Image src='/dog.png' alt='image of a dog' layout='fill' objectFit='cover' />
            </div>
            <button className='btn-primary'>Add to cart</button>
        </div>
    )
}
  
export default Featured;