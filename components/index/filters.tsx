import { useContext } from 'react';

import Checkbox from '@/components/controls/checkbox';

import styles from '@/styles/components/filters.module.scss';

import { iServerData } from '@/utilities/interfaces/serverData';

import { ServerDataContext } from '@/utilities/contexts/serverData';

const Filters = () => {

    const value = useContext(ServerDataContext) as iServerData;

    const categories = value?.data?.categories || [];
    
    return (
        <div>
            <div className={styles.filters}>
                <h4>Category</h4>
                <div className={styles.category}>
                    {categories.map(category => {
                        return <Checkbox key={category.name} id={category.name} text={category.name} />
                    })}
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