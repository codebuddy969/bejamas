import styles from '@/styles/components/pagination.module.scss';

const Pagination = () => {
    return (
        <div className={styles.pagination}>
            <button></button>
            <button>1</button>
            <button>2</button>
            <span>...</span>
            <button>4</button>
            <button></button>
        </div>
    )
}
  
export default Pagination;