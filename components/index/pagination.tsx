import {useDispatch} from "react-redux";
import {api_pagination} from "@/utilities/redux/slices/apiRequest.slice";

import styles from "@/styles/components/pagination.module.scss";

const Pagination = ({pages, page}: {pages: number; page: Number}) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.pagination}>
            {page > 1 && (
                <button
                    className={styles.prev}
                    onClick={() =>
                        dispatch(api_pagination((page as number) - 1))
                    }
                ></button>
            )}
            {[...Array(pages)].map((_x, i) => {
                return (
                    <button
                        key={i}
                        className={i + 1 === page ? styles.active : ""}
                        onClick={() => dispatch(api_pagination(i + 1))}
                    >
                        {i + 1}
                    </button>
                );
            })}
            {page < pages && (
                <button
                    className={styles.next}
                    onClick={() =>
                        dispatch(api_pagination((page as number) + 1))
                    }
                ></button>
            )}
        </div>
    );
};

export default Pagination;
