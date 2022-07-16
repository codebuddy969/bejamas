import Checkbox from '@/components/controls/checkbox';

import styles from '@/styles/components/filters.module.scss';

const Filters = () => {
    return (
        <div>
            <div className={styles.filters}>
                <h4>Category</h4>
                <div className={styles.category}>
                    <Checkbox id='people' text='People' />
                    <Checkbox id='premium' text='Premium' />
                </div>

                <h4>Price range</h4>
                <div className={styles.price}>
                    <Checkbox id='cheap' text='Lower than $20' />
                    <Checkbox id='low' text='$20 - $100' />
                    <Checkbox id='high' text='$100 - $200' />
                    <Checkbox id='expensive' text='More than $200' />
                </div>
            </div>
        </div>
    )
}
  
export default Filters;