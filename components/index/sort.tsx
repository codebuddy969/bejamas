import {useState} from "react";

import Image from "next/image";
import styles from "@/styles/components/sort.module.scss";

import {useSelector, useDispatch} from "react-redux";
import {RootState} from "@/utilities/redux/store";
import {
    api_sorting,
    api_order,
} from "@/utilities/redux/slices/apiRequest.slice";

import {useDetectClickOutside} from "react-detect-click-outside";

const Sort = () => {
    const [opened, setOpened] = useState(false);

    const dispatch = useDispatch();

    const apiRequest = useSelector((state: RootState) => state.apiRequest);

    const ref = useDetectClickOutside({
        onTriggered: () => opened && setOpened(false),
    });

    return (
        <div
            className={`${styles.sort} ${opened && styles["list-visible"]}`}
            ref={ref}
        >
            <div>
                <button
                    onClick={() =>
                        dispatch(
                            api_order(
                                apiRequest.order === "desc" ? "asc" : "desc"
                            )
                        )
                    }
                >
                    <span className={styles.image}>
                        <Image
                            src={
                                apiRequest.order === "desc"
                                    ? "/arrow_down.svg"
                                    : "/arrow_up.svg"
                            }
                            alt="sort icon"
                            layout="fill"
                            objectFit="contain"
                        />
                    </span>
                    <span className={styles.text}>Sort by </span>
                </button>
                <button onClick={() => setOpened(!opened)}>
                    {apiRequest.sorting} <span className={styles.arrow}></span>
                </button>
            </div>
            <ul className={styles.list}>
                <li>
                    <button
                        onClick={() => dispatch(api_sorting("alphabetically"))}
                    >
                        Alphabetically
                    </button>
                </li>
                <li>
                    <button onClick={() => dispatch(api_sorting("price"))}>
                        Price
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sort;
